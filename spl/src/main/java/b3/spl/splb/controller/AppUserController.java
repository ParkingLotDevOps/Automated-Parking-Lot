package b3.spl.splb.controller;
import b3.spl.splb.Services.AppUserService;
import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Role;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


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
}

@Data
class RoleToUserForm{
    private String email;
    private String roleName;
}
