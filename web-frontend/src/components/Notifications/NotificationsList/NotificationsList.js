import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import styles from './NotificationsList.module.css';
import TheHeader from 'components/TheHeader/TheHeader';
import NotificationItem from 'components/Notifications/NotificationItem/NotificationItem';
import { Sidebar } from 'components';

export default function NotificationsList() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  const [items, setItems] = React.useState([
    {
      name: 'Need Help',
      content: 'Hi! I reserved the Parking Lot Palas for today from 14:00 to 16:00. How can I cancel the reservation?'
    },
    {
      name: 'Review',
      content: 'I really enjoyed the parking and the app. Definitely will use it again! 💖'
    },
    {
      name: 'Review',
      content: 'I had a problem with my reservation: On my parking spot there were some empty carton boxes and I have to waste time moving them before parking!! 😡🤬'
    }
  ]);

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Notifications" />
        <ul className={styles.listItems}>
          {items.map((item, index) => (
            <NotificationItem key={uuid()} item={item} onClick={() => {
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
