import React from 'react';
import styles from './SignIn.module.css';
import Background from 'assets/background.svg';
import { TextField } from '@mui/material';

export default function SignIn() {
  return (
    <>
      <form className={styles.container}>
        <TextField
          label="Username or email address"
          variant="standard"
          style={{ display: 'block', width: 300 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
        />
      </form>
      <img src={Background} className={styles.bg} draggable="false" />
    </>
  );
};
