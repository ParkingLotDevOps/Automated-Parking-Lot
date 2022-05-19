package b3.spl.splb.Services;

import b3.spl.splb.model.ParkingSpot;
import b3.spl.splb.repository.ParkingSpotRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;


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
    public ParkingSpot getParkingSpot(Long id) {
        return parkingSpotRepo.findById(id).orElse(null);
    }

    @Override
    public ParkingSpot saveParkingSpot(ParkingSpot parkingSpot) {
        parkingSpot.setId(null);
        return parkingSpotRepo.save(parkingSpot);
    }

    @Override
    public ParkingSpot updateParkingSpot(ParkingSpot parkingSpot, Long id) {
        ParkingSpot parkingSpotDB = parkingSpotRepo.findById(id).orElse(null);
        if(Objects.isNull(parkingSpotDB)) {
            return null;
        }
        parkingSpotDB.setAvailable(parkingSpot.isAvailable());
        parkingSpotDB.setType(parkingSpot.getType());
        return parkingSpotRepo.save(parkingSpotDB);
    }

    @Override
    public void deleteParkingSpot(Long id) {
        parkingSpotRepo.deleteById(id);
    }
}
