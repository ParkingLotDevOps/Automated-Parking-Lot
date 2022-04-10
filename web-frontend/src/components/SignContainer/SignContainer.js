import React from 'react';
import Logo from 'assets/logo.svg';
import Background from 'assets/background.svg';
import styles from './SignContainer.module.css';

export default function SignContainer({ onSubmit, children }) {
  const submit = event => {
    onSubmit();
    event.preventDefault();
  };
  return (
    <section>
      <img src={Logo} className={styles.logo} alt="logo" />
      <form className={styles.form} onSubmit={submit}>{children}</form>
      <img src={Background} className={styles.bg} draggable="false" alt="background" />
    </section>
  );
};
