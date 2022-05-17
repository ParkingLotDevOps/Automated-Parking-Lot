package b3.spl.splb.controller;

import b3.spl.splb.Services.CarService;
import b3.spl.splb.model.Car;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
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
    @GetMapping("/car/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        return ResponseEntity.ok().body(carService.getCarById(id));
    }
    @PostMapping("/car/update")
    public ResponseEntity<?> updateCar(@RequestBody ObjectNode objectNode)
    {
        Long carId = objectNode.get("carId").asLong();
        String newLicensePlate = objectNode.get("newLicensePlate").asText();

        Pattern pattern = Pattern.compile("[A-Z]+[0-9]+[A-Z]+");
        boolean isValid= Pattern.matches(String.valueOf(pattern), newLicensePlate);

        if(!isValid)
            return ResponseEntity.badRequest().body("Invalid license plate format: " + newLicensePlate);
        else
            return ResponseEntity.ok().body(carService.updateCarLicensePlate(carId, newLicensePlate));
    }

    @DeleteMapping("/car/delete/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }
}
