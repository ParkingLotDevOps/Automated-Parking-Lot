package b3.spl.splb.repository;

import b3.spl.splb.model.ParkingLot;
import b3.spl.splb.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParkingLotRepo extends JpaRepository<ParkingLot, Long> {
    ParkingLot findByName(String name);

    @Modifying
    @Query("update ParkingLot p set p.approved = ?2 where p.id = ?1")
    void findByIdAndSetApproved(Long id, Boolean approved);

    @Query("select p from ParkingLot p where ABS(p.latitude - :latitude) <= :radius and ABS(p.longitude - :longitude) <= :radius")
    List<ParkingLot> findClosestParkingLot(
            @Param("latitude") Double latidude,
            @Param("longitude") Double longitude,
            @Param("radius") Double radius);
}
