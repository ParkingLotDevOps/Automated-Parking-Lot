package b3.spl.splb.Services;

import b3.spl.splb.model.AppUser;
import b3.spl.splb.model.Car;

import java.util.List;

public interface CarService {
    Car saveCar (Car car);
    List<Car> getCars (AppUser user);
    void deleteCar (Car car);
    Car updateCar (Car car);
}
