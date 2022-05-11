package b3.spl.splb.Services;

import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.ParkingLot;
import b3.spl.splb.model.Role;
import b3.spl.splb.util.Point;
import org.apache.tomcat.jni.User;

import java.util.List;

public interface AppUserService {
    AppUser saveUser(AppUser user);
    Role saveRole(Role role);
    void addRoleToAppUser(String email,  String rolName);
    AppUser getUser(String email);
    List<AppUser> getUsers();
}
