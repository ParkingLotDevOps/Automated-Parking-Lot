package b3.spl.splb.controller;

import b3.spl.splb.Services.CarService;
import b3.spl.splb.model.Car;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.regex.Pattern;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class CarController {
    private final CarService carService;

    @PostMapping("/car/save")
    public ResponseEntity<Car> saveCar(@RequestBody Car car){

        Pattern pattern = Pattern.compile("[A-Z]+[0-9]+[A-Z]+");
        boolean isValid= Pattern.matches(String.valueOf(pattern), car.getLicensePlate());

        if(!isValid)
            return ResponseEntity.badRequest().body(car);
        else {
            URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/car/save").toString());
            return ResponseEntity.created(uri).body(carService.saveCar(car));
        }
    }
//    @GetMapping("/cars")
//    public ResponseEntity<List<Car>> getAllCars(@RequestBody AppUser appUser)
//    {
//
//    }
    @PutMapping("/car/update")
    public ResponseEntity<Car> updateCar(@RequestBody Car car)
    {
        return ResponseEntity.ok().body(carService.updateCar(car));
    }
    @DeleteMapping("/car/delete")
    public void deleteCar(@RequestBody Car car)
    {
        carService.deleteCar(car);
    }
}
