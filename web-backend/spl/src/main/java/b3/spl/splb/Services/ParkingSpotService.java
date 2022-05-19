package b3.spl.splb.Services;

import b3.spl.splb.model.ParkingSpot;

import java.util.List;

public interface ParkingSpotService {
    List<ParkingSpot> getParkingSpots();
    ParkingSpot getParkingSpot(Long id);
    ParkingSpot saveParkingSpot(ParkingSpot parkingSpot);
    ParkingSpot updateParkingSpot(ParkingSpot parkingSpot, Long id);
    void deleteParkingSpot(Long id);
}
