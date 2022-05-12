import * as React from 'react';
import styles from './NotificationItem.module.css';

export default function NotificationItem({ item }) {
  return (
    <>
      <li className={styles.listItem}>
        <div className="title">{item.name}</div>
        <p className="content">{item.content}</p>
      </li>
    </>
  );
}
