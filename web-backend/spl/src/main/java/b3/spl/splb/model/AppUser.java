package b3.spl.splb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;
    private String username;
    @Column(name="email", unique=true)
    private String email;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles=new ArrayList<>();
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "cars",
            joinColumns = @JoinColumn(name = "appuser_id"),
            inverseJoinColumns = @JoinColumn(name = "car_id"))
    List<Car> cars;
    private boolean bannedUser;
    private boolean bannedProvider;

}
