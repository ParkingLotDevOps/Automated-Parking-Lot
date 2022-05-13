package b3.spl.splb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    private String licensePlate;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "cars")
    List<AppUser> users;
}
