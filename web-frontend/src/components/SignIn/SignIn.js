import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

import styles from './SignIn.module.css';
import { SignContainer, BaseButton } from 'components';

export default function SignIn() {
  return (
    <SignContainer>
      <TextField
        label="Username or email address"
        variant="standard"
        fullWidth
      />
      <TextField
        type="password"
        label="Password"
        variant="standard"
        fullWidth
      />
      <div className={styles.right}>
        Forgot password?
      </div>

      <BaseButton
        content="Login"
        color="yellow"
      />
      <div className={styles.center}>
        or
      </div>

      <BaseButton
        content="Login with Google"
        color="red"
        icon="google"
      />
      <BaseButton
        content="Login with Facebook"
        color="blue"
        icon="facebook"
      />
      <div className={styles.center}>
        Don't have an account?&nbsp;
        <Link to="/sign-up">
          Create one
        </Link>
      </div>
    </SignContainer>
  );
}
