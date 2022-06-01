import React from 'react';
import styles from './EditParkingLot.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { EditParkingLotPanel, EditParkingLotGrid, Sidebar } from 'components';

export default function EditParkingLot() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      return navigate('/sign-in');
    }
  });

  const { name } = useParams();
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.name}>{name.replace(/-/g, ' ')}</h1>
        <EditParkingLotPanel />
        <EditParkingLotGrid spotsCount={17} />
      </main>
    </>
  );
};
