package b3.spl.splb.repository;

import b3.spl.splb.model.ParkingLot;
import b3.spl.splb.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParkingLotRepo extends JpaRepository<ParkingLot, Long> {
    ParkingLot findByName(String name);

    @Query("select p from ParkingLot p where p.latitude >= :latitude and p.latitude <= :latitude2 and p.longitude >= :longitude and p.longitude <= :longitude2")
    List<ParkingLot> findClosestParkingLot(
            @Param("latitude") Double latidude,
            @Param("longitude") Double longitude,
            @Param("latitude2") Double latidude2,
            @Param("longitude2") Double longitude2 );
}
