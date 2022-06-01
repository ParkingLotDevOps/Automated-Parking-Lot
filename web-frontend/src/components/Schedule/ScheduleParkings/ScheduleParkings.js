import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ScheduleParkings.module.css';

import TheHeader from 'components/TheHeader/TheHeader';
import ScheduleParking from 'components/Schedule/ScheduleParking/ScheduleParking';
import { Sidebar } from 'components';

export default function ScheduleParkings() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      return navigate('/sign-in');
    }
  });

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
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
            <div>Name</div>
            <div className={styles['from-to']}>
              <div>From</div>
              <div>To</div>
            </div>
            <div className={styles['week-days']}>
            {weekDays.map((day) => (
              <div key={day.id}>{day}</div>
            ))}
            </div>
            <div className={styles['from-to']}>
              <div>Date From</div>
              <div>Date To</div>
            </div>
          </li>
          {items.map((item) => (
            <ScheduleParking key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
