import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import styles from './ScheduleParkings.module.css';
import TheHeader from 'components/TheHeader/TheHeader';
import ScheduleParking from 'components/Schedule/ScheduleParking/ScheduleParking';
import { Sidebar } from 'components';
import { getUserData } from 'hooks';

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

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [items, setItems] = React.useState([]);
  const updateItems = async () => {
    const ans = await getUserData();
    setItems(ans.parkingLots.map(lot => ({
      name: lot.name,
      location: `(${lot.latitude}, ${lot.longitude})`,
      date: new Date(),
      status: ['opened', 'closed', 'canceled'][Math.floor(Math.random() * 3)]
    })));
  };
  React.useEffect(() => {
    updateItems();
  }, []);

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
              <div key={uuid()}>{day}</div>
            ))}
            </div>
            <div className={styles['from-to']}>
              <div>Date From</div>
              <div>Date To</div>
            </div>
          </li>
          {items.map((item) => (
            <ScheduleParking key={uuid()} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
