import React from 'react';
import styles from './SignIn.module.css';
import Background from 'assets/background.svg';

export default function SignIn() {
  return (
    <>
      <img src={Background} className={styles.bg} draggable="false" />
    </>
  );
};
