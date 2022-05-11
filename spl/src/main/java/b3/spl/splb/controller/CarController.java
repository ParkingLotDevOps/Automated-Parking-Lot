package b3.spl.splb.controller;

import b3.spl.splb.Services.CarService;
import b3.spl.splb.Services.ParkingLotService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CarController {
    private final CarService carService;
}
