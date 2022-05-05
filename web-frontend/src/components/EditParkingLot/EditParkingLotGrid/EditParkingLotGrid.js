import React from 'react';
import styles from './EditParkingLotGrid.module.css';
import { FaWheelchair, FaChargingStation } from 'react-icons/fa';

export default function EditParkingLotGrid({ spotsCount }) {
  const [spots, setSpots] = React.useState(Array(spotsCount).fill(0));
  return (
    <div className={styles.parking}>
      {spots.map((spot, index) => (
        <button
          key={index}
          className={styles[`type-${spot}`]}
          onClick={() => {
            const newSpots = [...spots];
            newSpots[index] = (newSpots[index] + 1) % 3;
            setSpots(newSpots);
          }}
        >
          {index + 1}
          {[<></>, <FaWheelchair />, <FaChargingStation />][spot]}
        </button>
      ))}
    </div>
  );
};
