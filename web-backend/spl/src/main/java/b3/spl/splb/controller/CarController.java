package b3.spl.splb.controller;

import b3.spl.splb.Services.CarService;
import b3.spl.splb.model.Car;
import com.fasterxml.jackson.databind.JsonNode;
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
    public ResponseEntity<?> saveCar(@RequestBody Car car){
        if(car == null || car.getLicensePlate()==null)
            return ResponseEntity.badRequest().body("Invalid input");

        Pattern pattern = Pattern.compile("[A-Z]+[0-9]+[A-Z]+");
        boolean isValid= Pattern.matches(String.valueOf(pattern), car.getLicensePlate());

        if(!isValid)
            return ResponseEntity.badRequest().body("Invalid input");
        else {
            URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/car/save").toString());
            return ResponseEntity.created(uri).body(carService.saveCar(car));
        }
    }
    @GetMapping("/car/{id}")
    public ResponseEntity<?> getCarById(@PathVariable Long id) {
        Car car = carService.getCarById(id);
        if (car == null)
            return ResponseEntity.badRequest().body("Car with id " + id + "couldn't be found");
        return ResponseEntity.ok().body(car);
    }
    @PostMapping("/car/update")
    public ResponseEntity<?> updateCar(@RequestBody ObjectNode objectNode)
    {
        if(objectNode==null)
            return ResponseEntity.badRequest().body("Invalid input format");
        JsonNode carIdNode = objectNode.get("carId");
        JsonNode newLicensePlateNode = objectNode.get("newLicensePlate");
        String newLicensePlate;
        Long carId;

        if (carIdNode == null)
            return ResponseEntity.badRequest().body("Invalid input format");
        else carId = carIdNode.asLong();

        if (newLicensePlateNode == null)
            return ResponseEntity.badRequest().body("Invalid input format");
        else newLicensePlate = newLicensePlateNode.asText();

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
