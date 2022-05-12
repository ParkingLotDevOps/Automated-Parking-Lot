package b3.spl.splb.controller;
import b3.spl.splb.Services.AppUserService;
import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Role;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AppUserController {
    private final AppUserService appUserService;
    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getUsers(){
        return ResponseEntity.ok().body(appUserService.getUsers());
    }

    @PostMapping("/user/save")
    public ResponseEntity<AppUser> savaUser(@RequestBody AppUser user){
        if(user == null){
            return ResponseEntity.badRequest().body(user);
        }

        if(!user.getEmail().matches("[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.com")){
            return ResponseEntity.badRequest().body(user);
        }

        if(user.getPassword().length()<8 || !user.getPassword().matches(".*[A-Z].*") ||
                !user.getPassword().matches(".*[a-z].*") || !user.getPassword().matches(".*[0-9].*")){
            return ResponseEntity.badRequest().body(user);
        }

        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toString());
        return ResponseEntity.created(uri).body(appUserService.saveUser(user));
    }
    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody RoleToUserForm form){
        appUserService.addRoleToAppUser(form.getEmail(), form.getRoleName());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add/role")
    public ResponseEntity<AppUser> addRole(@RequestBody ObjectNode objectNode){
        String email = objectNode.get("email").asText();
        String role = objectNode.get("role").asText();
        appUserService.addRoleToAppUser(email, role);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add/car")
    public ResponseEntity<AppUser> addCar(@RequestBody ObjectNode objectNode){
        Long carId = objectNode.get("carId").asLong();
        Long userId = objectNode.get("userId").asLong();
        appUserService.addCarToUser(carId, userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());//TODO : de mutat in fisier de configurare
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                AppUser user = appUserService.getUser(username);

                String access_token = JWT.create()
                        .withSubject(user.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);

            }
            catch (Exception exception){
                response.setHeader("error", exception.getMessage());
                response.setStatus(403);
                Map<String, String> error = new HashMap<>();
                error.put("error", exception.getMessage());
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        }
    }
}

@Data
class RoleToUserForm{
    private String email;
    private String roleName;
}
