import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';

import styles from './SignUp.module.css';
import { BaseButton, SignContainer } from 'components';

export default function SignUp() {
  return (
    <SignContainer>
      <h2 className={styles.title}>Create an account</h2>
      <TextField fullWidth variant="standard" label="Username" />
      <TextField fullWidth variant="standard" label="Email address" />
      <TextField fullWidth variant="standard" label="Country" />
      <TextField fullWidth variant="standard" label="Password" type="password" />
      <TextField fullWidth variant="standard" label="Confirm password" type="password" />

      <div>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: '#001e1d',
                '&.Mui-checked': {
                  color: '#001e1d'
                }
              }}
            />
          }
          label={
            <strong>
              Keep me signed in
            </strong>
          }
        />
        <div className={styles.tos}>
          By signing up, you agree to our&nbsp;
          <Link to="#">terms and conditions</Link>
        </div>
      </div>

      <BaseButton color="yellow">Let's go!</BaseButton>
      <div className={styles.signin}>
        Already have an account?&nbsp;
        <Link to="/sign-in" className={styles.link}>Sign in</Link>
      </div>
    </SignContainer>
  );
};
