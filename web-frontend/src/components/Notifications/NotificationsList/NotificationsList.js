import * as React from 'react';
import styles from './NotificationsList.module.css';

import TheHeader from 'components/TheHeader/TheHeader';
import NotificationItem from 'components/Notifications/NotificationItem/NotificationItem';
import { Sidebar } from 'components';

export default function NotificationsList() {
  const items = [
    {
      id: '1',
      name: 'Notification 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus est eget turpis tincidunt, efficitur tempus dui venenatis. Sed sit amet nulla sagittis, imperdiet orci at, aliquet leo. Etiam neque tellus, rutrum vel molestie eu, efficitur quis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu dui sodales, finibus sapien eget, eleifend est.'
    },

    {
      id: '2',
      name: 'Notification 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus est eget turpis tincidunt, efficitur tempus dui venenatis. Sed sit amet nulla sagittis, imperdiet orci at, aliquet leo. Etiam neque tellus, rutrum vel molestie eu, efficitur quis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu dui sodales, finibus sapien eget, eleifend est.'
    },

    {
      id: '3',
      name: 'Notification 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus est eget turpis tincidunt, efficitur tempus dui venenatis. Sed sit amet nulla sagittis, imperdiet orci at, aliquet leo. Etiam neque tellus, rutrum vel molestie eu, efficitur quis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu dui sodales, finibus sapien eget, eleifend est.'
    }
  ];

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Notifications" />
        <ul className={styles.listItems}>
          {items.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
