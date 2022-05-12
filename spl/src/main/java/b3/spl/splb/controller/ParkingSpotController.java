package b3.spl.splb.controller;

import b3.spl.splb.Services.ParkingSpotService;
import b3.spl.splb.model.ParkingSpot;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ParkingSpotController {
    private final ParkingSpotService parkingSpotService;

    @GetMapping("/parkingspots")
    public ResponseEntity<List<ParkingSpot>> getParkingSpots() {
        return ResponseEntity.ok().body(parkingSpotService.getParkingSpots());
    }

    @PostMapping("/parkingspots")
    public ResponseEntity<ParkingSpot> saveParkingSpot(@RequestBody ParkingSpot parkingSpot) {
        return ResponseEntity.ok().body(parkingSpotService.saveParkingSpot(parkingSpot));
    }
}
