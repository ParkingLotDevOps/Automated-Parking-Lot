import React from 'react';
import Logo from 'assets/logo.svg';
import Background from 'assets/background.svg';
import styles from './SignContainer.module.css';

export default function SignContainer({ children }) {
  return (
    <section className={styles.container}>
      <img 
        src={Logo}
        className={styles.logo}
        draggable="false"
      />

      <form className={styles.form}>
        {children}
      </form>
      
      <img
        src={Background}
        className={styles.bg}
        draggable="false"
      />
    </section>
  );
};