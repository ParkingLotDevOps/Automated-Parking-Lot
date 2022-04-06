import React from 'react';
import Background from 'assets/background.svg';
import styles from './SignContainer.module.css';

export default function SignContainer({ children }) {
  return (
    <>
      <form className={styles.container}>
        {children}
      </form>
      <img
        src={Background}
        className={styles.bg}
        draggable="false"
      />
    </>
  );
};
