package b3.spl.splb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
    private String latitude;
    private String longitude;
    private float price;
}
