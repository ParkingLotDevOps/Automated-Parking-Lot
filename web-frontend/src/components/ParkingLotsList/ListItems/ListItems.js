import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './ListItems.module.css';

import TheHeader from 'components/TheHeader/TheHeader';
import ListItem from 'components/ParkingLotsList/ListItem/ListItem';
import { Sidebar } from 'components';
import { refreshToken } from 'hooks';

export default function ListItems() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  const fields = ['Name', 'Location', 'Date', 'Status'];
  const [items, setItems] = React.useState([]);

  const updateItems = async () => {
    const res = await fetch('https://automated-parking-lot.herokuapp.com/api/provider/parkinglots', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    const ans = await res.json();
    if (!res.ok) {
      refreshToken(ans);
      updateItems();
    }
    else {
      setItems(ans.map(lot => ({
        name: lot.name,
        location: `(${lot.latitude}, ${lot.longitude})`,
        date: new Date(),
        status: ['opened', 'closed', 'canceled'][Math.floor(Math.random() * 3)]
      })));
    }
  };

  React.useEffect(() => {
    updateItems();
  }, []);

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Parking Lots" hasSearchBox hasButton updateLots={updateItems} />
        <ul className={styles.listItems}>
          <li className={styles.listFields} key="0">
            <div style={{ width: '5%' }}></div>
            {fields.map((field) => (
              <div key={uuid()}>{field}</div>
            ))}
            <div style={{ width: '10%' }}></div>
          </li>
          {items.map((item) => (
            <ListItem key={uuid()} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
