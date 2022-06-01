import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListItems.module.css';

import TheHeader from 'components/TheHeader/TheHeader';
import ListItem from 'components/ParkingLotsList/ListItem/ListItem';
import { Sidebar } from 'components';

export default function ListItems() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      return navigate('/sign-in');
    }
  });

  const fields = ['Name', 'Location', 'Date', 'Status'];
  const items = [
    {
      id: '1',
      name: 'Parking Lot 1',
      location: 'Location 1',
      date: new Date(),
      status: 'opened',
      isSelected: false
    },
    {
      id: '2',
      name: 'Parking Lot 2',
      location: 'Location 2',
      date: new Date(),
      status: 'closed',
      isSelected: true
    },
    {
      id: '3',
      name: 'Parking Lot 3',
      location: 'Location 3',
      date: new Date(),
      status: 'canceled',
      isSelected: false
    }
  ];

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Parking Lots" hasSearchBox hasButton />
        <ul className={styles.listItems}>
          <li className={styles.listFields} key="0">
            <div style={{ width: '5%' }}></div>
            {fields.map((field) => (
              <div key={field.id}>{field}</div>
            ))}
            <div style={{ width: '10%' }}></div>
          </li>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
