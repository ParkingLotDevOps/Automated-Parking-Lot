import React from 'react';
import styles from './EditParkingLot.module.css';
import { useParams } from 'react-router-dom';
import { EditParkingLotPanel, EditParkingLotGrid } from 'components';

export default function EditParkingLot() {
  const { name } = useParams();

  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <EditParkingLotPanel />
      <EditParkingLotGrid />
    </>
  );
};
