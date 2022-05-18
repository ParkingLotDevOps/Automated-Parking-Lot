package b3.spl.splb.Services;

import b3.spl.splb.model.ParkingLot;
import b3.spl.splb.util.Point;

import java.util.List;
import java.util.Optional;

public interface ParkingLotService {
    ParkingLot saveParkingLot(ParkingLot parkingLot);
    List<ParkingLot> getParkingLots();
    List<ParkingLot> getClosestParkingLots(Point userLocation);
    Optional<ParkingLot> setApproved(Long id, Boolean approved);
}
