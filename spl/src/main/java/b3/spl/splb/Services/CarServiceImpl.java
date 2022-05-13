package b3.spl.splb.Services;

import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Car;
import b3.spl.splb.repository.CarRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CarServiceImpl implements CarService {

    @Autowired
    private final CarRepo carRepo;

    @Override
    public Car saveCar(Car car)
    {
        log.info("Saving new car {} to the database", car.getLicensePlate());
        return carRepo.save(car);
    }

    @Override
    public List<Car> getCars(AppUser user) {
        return null;
    }

    @Override
    public void deleteCar(Car car) {
        carRepo.delete(car);
    }

    @Override
    public Car updateCarLicensePlate(Long carId, String newLicensePlate) {
        Car car = carRepo.findById(carId).get();
        car.setLicensePlate(newLicensePlate);
        return car;
    }
    @Override
    public Car getCarById(Long id){
        Optional<Car> car =  carRepo.findById(id);
        return car.orElse(null);
    }
}
