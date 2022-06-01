import React from 'react';
import styles from './EditParkingLot.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { EditParkingLotPanel, EditParkingLotGrid, Sidebar } from 'components';
import { getUserData } from 'hooks';

export default function EditParkingLot() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  const { name } = useParams();
  const [data, setData] = React.useState(null);
  const getParkingLot = async () => {
    const lots = (await getUserData()).parkingLots;
    const data = lots.find(lot => lot.name === name.replace(/-/g, ' '));
    if (data == null) {
      navigate('/dashboard');
    }
    setData(data);
  };
  React.useEffect(() => {
    getParkingLot();
  }, []);

  if (data == null) {
    return <></>;
  }
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.name}>{name.replace(/-/g, ' ')}</h1>
        <EditParkingLotPanel />
        <EditParkingLotGrid spotsCount={data.spots.length} />
      </main>
    </>
  );
};
