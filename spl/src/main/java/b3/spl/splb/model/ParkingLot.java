package b3.spl.splb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParkingLot {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;
    private Double latitude;
    private Double longitude;
    private float price;
    private boolean approved;
    @OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
    private Collection<ParkingSpot> spots = new ArrayList<>();
}
