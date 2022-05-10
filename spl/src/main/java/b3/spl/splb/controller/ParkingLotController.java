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
public class ParkingLotController {
    private final ParkingLotService parkingLotService;

    @PostMapping("provider/parkinglot/save")
    public ResponseEntity<ParkingLot> savaUser(@RequestBody ParkingLot parkingLot){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/provider/parkinglot/save").toString());
        return ResponseEntity.created(uri).body(parkingLotService.saveParkingLot(parkingLot));
    }

    @GetMapping("provider/parkinglots")
    public ResponseEntity<List<ParkingLot>> getParkingLots(){
        return ResponseEntity.ok().body(parkingLotService.getParkingLots());
    }

    @PostMapping("/user/parkinglots")
    public ResponseEntity<List<ParkingLot>> getClosestParkingLots(@RequestBody Point userLocation){
        return ResponseEntity.ok().body(parkingLotService.getClosestParkingLots(userLocation));
    }

    @GetMapping("admin/parkinglot/approve")
    public ResponseEntity<Optional<ParkingLot>> setApproved(@RequestBody ObjectNode objectNode){
        Long id = objectNode.get("id").asLong();
        Boolean approved = objectNode.get("approved").asBoolean();
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/admin/parkinglot/approve").toString());
        return ResponseEntity.created(uri).body(parkingLotService.setApproved(id, approved));
    }
}
