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
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return;
  }

  React.useEffect(() => {
    const fun = async () => {
      const res = await fetch('https://automated-parking-lot.herokuapp.com/api/provider/parkinglots', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      const ans = await res.json();
      if (!res.ok && ans.error.startsWith('The Token has expired')) {
        localStorage.removeItem('token');
        navigate('/sign-in');
      }
      else if (!res.ok) {
        alert(ans.error);
      }
      else {
        console.log(ans);
      }
    };
    fun();
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
