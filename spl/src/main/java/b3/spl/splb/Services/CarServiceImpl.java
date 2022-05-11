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
    public Car updateCar(Car car) {
        carRepo.delete(car);
        return carRepo.save(car);
    }
}
