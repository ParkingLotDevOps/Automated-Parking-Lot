import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import styles from './ScheduleParkings.module.css';
import TheHeader from 'components/TheHeader/TheHeader';
import ScheduleParking from 'components/Schedule/ScheduleParking/ScheduleParking';
import { Sidebar } from 'components';

export default function ScheduleParkings() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const fields = ['Name', 'From', 'To', ...weekDays, 'Date From', 'Date To'];
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
        <TheHeader title="Schedule" hasSearchBox />
        <ul className={styles.listItems}>
          <li className={styles.listFields} key="0">
            <div style={{ width: '5%' }}></div>
            {fields.map((field) => (
              <div key={uuid()}>{field}</div>
            ))}
            <div style={{ width: '10%' }}></div>
          </li>
          {items.map((item) => (
            <ScheduleParking key={uuid()} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
