import React from 'react';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { SignContainer } from 'components';
import { BaseButton } from 'components';

import styles from './SignUp.module.css';

import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <SignContainer>
      <h2 className={styles.h2}>Create an account</h2>
      <TextField label="Username" variant="standard" fullWidth />
      <TextField label="Email address" variant="standard" fullWidth />
      <TextField label="Country" variant="standard" fullWidth />
      <TextField label="Password" variant="standard" fullWidth />
      <TextField label="Confirm password" variant="standard" fullWidth />

      <div>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: '#001E1D',
                '&.Mui-checked': {
                  color: '#001E1D'
                }
              }}
            />
          }
          label={
            <Typography className={styles.label}>Keep me signed in</Typography>
          }
        />

        <div className={styles.terms}>
          By signing in, you agree to our{' '}
          <span style={{ color: '#4D73FB', cursor: 'pointer' }}>
            terms and conditions
          </span>
        </div>
      </div>

      <div className={styles.btn}>
        <BaseButton content="Let's go!" color="yellow" />
      </div>

      <div className={styles.sign}>
        Already have an account?{' '}
        <Link to="/sign-in" className={styles.link}>
          Sign In
        </Link>
      </div>
    </SignContainer>
  );
}
