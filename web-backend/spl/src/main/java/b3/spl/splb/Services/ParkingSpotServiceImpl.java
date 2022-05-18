package b3.spl.splb.Services;

import b3.spl.splb.model.ParkingSpot;
import b3.spl.splb.repository.ParkingSpotRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ParkingSpotServiceImpl implements ParkingSpotService {
    private final ParkingSpotRepo parkingSpotRepo;

    @Override
    public List<ParkingSpot> getParkingSpots() {
        return parkingSpotRepo.findAll();
    }

    @Override
    public ParkingSpot saveParkingSpot(ParkingSpot parkingSpot) {
        return parkingSpotRepo.save(parkingSpot);
    }

    @Override
    public ParkingSpot updateParkingSpot(ParkingSpot parkingSpot, Long id) {
        ParkingSpot parkingSpotDB = parkingSpotRepo.findById(id).get();
        parkingSpotDB.setAvailable(parkingSpot.isAvailable());
        parkingSpotDB.setType(parkingSpot.getType());
        return parkingSpotRepo.save(parkingSpotDB);
    }

    @Override
    public void deleteParkingSpot(Long id) {
        parkingSpotRepo.deleteById(id);
    }
}
