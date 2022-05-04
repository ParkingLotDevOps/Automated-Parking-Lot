package b3.spl.splb;

import b3.spl.splb.Services.AppUserService;
import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;

@SpringBootApplication

public class SplbApplication {

    public static void main(String[] args) {
        SpringApplication.run(SplbApplication.class, args);
    }

    @Bean
    CommandLineRunner run(AppUserService appUserService){
        return args ->{
            appUserService.saveRole(new Role(null, "PARKING_LOT_PROVIDER"));
            appUserService.saveRole(new Role(null, "ADMIN"));
            appUserService.saveRole(new Role(null, "USER"));
            appUserService.saveUser(new AppUser(null, "Marian", "map", "popovicimarian2311@gmailcom", "1234", new ArrayList<>()));
            appUserService.addRoleToAppUser("map", "PARKING_LOT_PROVIDER");
            appUserService.addRoleToAppUser("map", "ADMIN");

        };
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
