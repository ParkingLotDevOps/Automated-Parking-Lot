package b3.spl.splb.controller;


import b3.spl.splb.Services.AppUserService;
import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Role;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jni.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
        appUserService.addRoleToAppUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }
}

@Data
class RoleToUserForm{
    private String username;
    private String roleName;
}
