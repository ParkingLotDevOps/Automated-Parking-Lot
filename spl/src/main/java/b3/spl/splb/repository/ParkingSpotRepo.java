package b3.spl.splb.repository;

import b3.spl.splb.model.ParkingSpot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkingSpotRepo extends JpaRepository<ParkingSpot, Long> {
}
