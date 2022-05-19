package b3.spl.splb.controller;

import b3.spl.splb.Services.ParkingLotService;
import b3.spl.splb.model.ParkingLot;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import b3.spl.splb.util.Point;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public  class ParkingLotController {
    private final ParkingLotService parkingLotService;

    @PostMapping("provider/parkinglot/save")
    public ResponseEntity<?> saveUser(@RequestBody ParkingLot parkingLot){
        if(parkingLot == null || parkingLot.getName() == null || parkingLot.getLatitude() == null || parkingLot.getLongitude() == null){
            return ResponseEntity.badRequest().body("Invalid input.");
        }
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/provider/parkinglot/save").toString());
        ParkingLot savedParkingLot = parkingLotService.saveParkingLot(parkingLot);
        if(savedParkingLot == null) {
            return ResponseEntity.badRequest().body("Could not save parking lot.");
        }
        return ResponseEntity.created(uri).body(savedParkingLot);
    }

    @GetMapping("provider/parkinglots")
    public ResponseEntity<List<ParkingLot>> getParkingLots(){
        return ResponseEntity.ok().body(parkingLotService.getParkingLots());
    }

    @PostMapping("/user/parkinglots")
    public ResponseEntity<?> getClosestParkingLots(@RequestBody Point userLocation){
        if(userLocation == null || userLocation.getLatitude() == null || userLocation.getLongitude() == null){
            return ResponseEntity.badRequest().body("Invalid input.");
        }
        return ResponseEntity.ok().body(parkingLotService.getClosestParkingLots(userLocation));
    }

    @GetMapping("admin/parkinglot/approve")
    public ResponseEntity<?> setApproved(@RequestBody ObjectNode objectNode){
        if(objectNode.has("id") && objectNode.has("approved")) {
            Long id = objectNode.get("id").asLong();
            Boolean approved = objectNode.get("approved").asBoolean();
            URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin/parkinglot/approve").toString());
            Optional<ParkingLot> parkingLot = parkingLotService.setApproved(id, approved);
            if(!parkingLot.isPresent()) {
                return ResponseEntity.badRequest().body("Parking lot not found.");
            }
            return ResponseEntity.created(uri).body(parkingLot);
        }
        return ResponseEntity.badRequest().body("id and approved value must be provided.");
    }
}
