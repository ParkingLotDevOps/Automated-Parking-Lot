package b3.spl.splb.Services;

import b3.spl.splb.model.ParkingLot;
import b3.spl.splb.repository.AppUserRepo;
import b3.spl.splb.repository.ParkingLotRepo;
import b3.spl.splb.repository.RoleRepo;
import b3.spl.splb.util.Point;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ParkingLotImpl implements ParkingLotService {
    private final AppUserRepo appUserRepo;
    private final RoleRepo roleRepo;
    private final ParkingLotRepo parkingLotRepo;

    @Override
    public ParkingLot saveParkingLot(ParkingLot parkingLot, String email) {
        log.info("Saving new parking lot {} to the database", parkingLot.getName());
        parkingLot.setApproved(false);
        ParkingLot parkingLot1= parkingLotRepo.save(parkingLot);
        appUserRepo.findByEmail(email).getParkingLots().add(parkingLot);
        return parkingLot1;
    }

    @Override
    public List<ParkingLot> getParkingLots() {
        log.info("Sending parking lots from database");
        return parkingLotRepo.findAll();
    }


    @Override
    public List<ParkingLot> getClosestParkingLots(Point userLocation) {
        log.info("Fetching closest parkingLots");
        return parkingLotRepo.findClosestParkingLot(userLocation.getLatitude(),
                userLocation.getLongitude(), 0.01);
    }

    @Override
    public Optional<ParkingLot> setApproved(Long id, Boolean approved) {
        parkingLotRepo.findByIdAndSetApproved(id, approved);
        return parkingLotRepo.findById(id);
    }
}
