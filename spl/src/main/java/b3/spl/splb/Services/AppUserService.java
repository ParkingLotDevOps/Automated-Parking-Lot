package b3.spl.splb.Services;

import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Role;

import java.util.List;

public interface AppUserService {
    AppUser saveUser(AppUser user);
    Role saveRole(Role role);
    void addRoleToAppUser(String email,  String rolName);
    AppUser getUser(String email);
    void addCarToUser(Long carId, Long userId);
    List<AppUser> getUsers();
}
