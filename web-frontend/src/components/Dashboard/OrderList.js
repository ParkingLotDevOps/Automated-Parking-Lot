import React from 'react';
import styles from './OrderList.module.css';

export default function LisItem(props) {
  return (
    <li className={styles.listItem}>
      <div>{props.item.trakingNo}</div>
      <div>{props.item.costumer}</div>
      <div>{props.item.price}</div>
      <div>{props.item.time}</div>
      <div>{props.item.lot}</div>
    </li>
  );
}
