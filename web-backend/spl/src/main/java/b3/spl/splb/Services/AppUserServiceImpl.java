package b3.spl.splb.Services;

import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Car;
import b3.spl.splb.model.Role;
import b3.spl.splb.repository.AppUserRepo;
import b3.spl.splb.repository.CarRepo;
import b3.spl.splb.repository.ParkingLotRepo;
import b3.spl.splb.repository.RoleRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppUserServiceImpl implements AppUserService, UserDetailsService {
    private final AppUserRepo appUserRepo;
    private final RoleRepo roleRepo;
    private final ParkingLotRepo parkingLotRepo;
    private final CarRepo carRepo;

    private final PasswordEncoder passwordEncoder;

    @Override //am rescris ca sa caute dupa email in baza de date
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        email = email.trim().toLowerCase();
        AppUser appUser = appUserRepo.findByEmail(email);
        if(appUser == null){
            log.error("User not found in database");
            throw new UsernameNotFoundException("User not found in the database");
        }
        else {
            log.info("User found in database : {}", email);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        appUser.getRoles().forEach(role ->{authorities.add(new SimpleGrantedAuthority(role.getName()));});
        return new org.springframework.security.core.userdetails.User(appUser.getUsername(), appUser.getPassword(), authorities);
    }

    

    @Override
    public AppUser saveUser(AppUser user) {
        log.info("Saving new user {} to the database", user.getName());
        if(appUserRepo.findByEmail(user.getEmail())!= null){
            return null;
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return appUserRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role {} to the database", role.getName());
        return roleRepo.save(role);
    }

    @Override
    public boolean addRoleToAppUser(String email, String rolName) {
        log.info("Adding role {} to user {}", rolName, email);
        AppUser appUser = appUserRepo.findByEmail(email);
        Role role = roleRepo.findByName(rolName);
        if(appUser == null || role == null)
           return false;
        appUser.getRoles().add(role);
        return true;
    }

    @Override
    public boolean setBannedUser(String email, Boolean banned) {
        Optional<AppUser> appUser= Optional.ofNullable(appUserRepo.findByEmail(email));
        if(!appUser.isPresent()) return false;

        log.info("Updating ban status {} to user {}", banned, email);
        appUserRepo.findByEmail(email).setBannedUser(banned);
        return true;
    }

    @Override
    public AppUser getUser(String email) {
        log.info("Fetching user {}", email);
        email = email.trim().toLowerCase();
        return appUserRepo.findByEmail(email);
    }

    @Override
    public List<AppUser> getUsers() {
        log.info("Fetching all users");
        return appUserRepo.findAll();
    }

    @Override
    public boolean addCarToUser(Long carId, Long userId)
    {
        log.info("Adding car {} to user {}", carRepo.findById(carId), appUserRepo.findById(userId));
        Optional<Car> car = carRepo.findById(carId);
        Optional<AppUser> appUser= appUserRepo.findById(userId);
        if(!car.isPresent() || !appUser.isPresent())
        {
            return false;
        }
        appUser.get().getCars().add(car.get());
        return true;
    }





}
