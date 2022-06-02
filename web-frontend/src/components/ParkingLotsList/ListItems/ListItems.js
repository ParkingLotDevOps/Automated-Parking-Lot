import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './ListItems.module.css';

import TheHeader from 'components/TheHeader/TheHeader';
import ListItem from 'components/ParkingLotsList/ListItem/ListItem';
import { Sidebar } from 'components';
import { makeRequest } from 'hooks';

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
    const res = await makeRequest(navigate, 'user/profile', 'GET', null);
    if (res != null) {
      setItems(res.parkingLots.map(lot => ({
        id: lot.id,
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
          {items.map((item, index) => (
            <ListItem key={uuid()} item={item} onDelete={async () => {
              await makeRequest(navigate, `parkinglot/${item.id}`, 'DELETE', null);
              const newItems = [...items];
              newItems.splice(index, 1);
              setItems(newItems);
            }} />
          ))}
        </ul>
      </main>
    </>
  );
}
