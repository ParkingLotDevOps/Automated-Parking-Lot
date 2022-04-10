import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

import styles from './SignIn.module.css';
import { SignContainer, BaseButton } from 'components';

export default function SignIn() {
  React.useEffect(() => {
    [...document.getElementsByTagName('svg')].filter(el => (
      el.getAttribute('width') === '1em' &&
      el.getAttribute('height') === '1em'
    )).forEach(el => el.removeAttribute('width'));
  }, []);

  return (
    <SignContainer>
      <TextField fullWidth variant="standard" label="Username or email address" />
      <TextField fullWidth variant="standard" label="Password" type="password" />
      <div className={styles.right}><Link to="#">Forgot password?</Link></div>

      <BaseButton color="yellow">Login</BaseButton>
      <div className={styles.center}>or</div>

      <div className={styles.btns}>
        <BaseButton color="red" icon="google">Login with Google</BaseButton>
        <BaseButton color="blue" icon="facebook">Login with Facebook</BaseButton>
      </div>

      <div className={styles.center}>
        Don't have an account?&nbsp;
        <Link to="/sign-up">Create one</Link>
      </div>
    </SignContainer>
  );
};
