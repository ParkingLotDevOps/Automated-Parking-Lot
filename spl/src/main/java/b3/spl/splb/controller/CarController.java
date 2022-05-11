package b3.spl.splb.controller;

import b3.spl.splb.Services.CarService;
import b3.spl.splb.model.Car;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class CarController {
    private final CarService carService;

    @GetMapping("/car/save")
    public ResponseEntity<Car> saveCar(@RequestBody Car car){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/car/save").toString());
        return ResponseEntity.created(uri).body(carService.saveCar(car));
    }
//    @GetMapping("/cars")
//    public ResponseEntity<List<Car>> getAllCars(@RequestBody AppUser appUser)
//    {
//
//    }
    @GetMapping("/car/update")
    public ResponseEntity<Car> updateCar(@RequestBody Car car)
    {
        return ResponseEntity.ok().body(carService.updateCar(car));
    }
    @GetMapping("/car/delete")
    public void deleteCar(@RequestBody Car car)
    {
        carService.deleteCar(car);
    }
}
