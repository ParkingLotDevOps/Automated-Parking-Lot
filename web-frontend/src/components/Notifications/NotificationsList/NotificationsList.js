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
      name: 'Notification 1',
      content: 'Your parking lots are almost fully occupied. Remember you can always add new ones from the Parkings Menu and see your schedules in the Schedule Menu.'
    },
    {
      name: 'Notification 2',
      content: 'A new parking lot has been reserved for today between 14:00 and 16:00. 🥳'
    },
    {
      name: 'Notification 3',
      content: 'A new parking lot has been reserved for tomorrow between 08:00 and 12:00. 🤩'
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
