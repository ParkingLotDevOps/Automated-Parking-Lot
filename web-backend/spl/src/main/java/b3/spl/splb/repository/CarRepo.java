package b3.spl.splb.repository;

import b3.spl.splb.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, Long> {

}
