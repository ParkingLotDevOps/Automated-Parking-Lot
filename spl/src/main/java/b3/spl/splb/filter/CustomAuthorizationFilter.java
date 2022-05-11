package b3.spl.splb.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import static java.util.Arrays.stream;
@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
           if(request.getServletPath().equals("/api/login") || request.getServletPath().equals("/api/user/save") || request.getServletPath().equals("/api/token/refresh") ){
               filterChain.doFilter(request, response);
           }
           else {
               String authorizationHeader = request.getHeader("Authorization");
               if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
                  try {
                      String token = authorizationHeader.substring("Bearer ".length());
                      Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());//TODO : de mutat in fisier de configurare
                      JWTVerifier verifier = JWT.require(algorithm).build();
                      DecodedJWT decodedJWT = verifier.verify(token);
                      String username = decodedJWT.getSubject();
                      String[] roles = decodedJWT.getClaim("roles").asArray(String.class);
                      Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
                      stream(roles).forEach(role ->{authorities.add(new SimpleGrantedAuthority(role));});
                      UsernamePasswordAuthenticationToken authenticationToken =
                              new UsernamePasswordAuthenticationToken(username, null, authorities);
                      SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                      filterChain.doFilter(request, response);
                  }
                  catch (Exception exception){
                    log.error("Error logginn in : {}" , exception.getMessage());
                    response.setHeader("error", exception.getMessage());
                    response.setStatus(403);
                    Map<String, String> error = new HashMap<>();
                    error.put("error", exception.getMessage());
                    response.setContentType("application/json");
                    new ObjectMapper().writeValue(response.getOutputStream(), error);
                  }
               }else {
                   filterChain.doFilter(request, response);
               }
           }
    }
}
