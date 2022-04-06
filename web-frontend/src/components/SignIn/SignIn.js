import React from 'react';
import { TextField } from '@mui/material';
import { SignContainer } from 'components';
import { BaseButton } from 'components';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <SignContainer>
      <TextField
        label="Username or email address"
        variant="standard"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        variant="standard"
        fullWidth
      />

      <div
        style={{
          textAlign: 'right',
          lineHeight: 1,
          transform: 'translateY(-.5rem)',
          color: '#f9bc60',
          cursor: 'pointer'
        }}
      >
        Forgot password ?
      </div>

      <BaseButton content="Login" color="yellow" />

      <div style={{ textAlign: 'center', lineHeight: 1 }}>or</div>

      <BaseButton content="Login with Google" color="red" icon="google" />

      <BaseButton content="Login with Facebook" color="blue" icon="facebook" />

      <div
        style={{
          textAlign: 'center',
          lineHeight: 1
        }}
      >
        or{' '}
        <Link
          to="/sign-up"
          style={{
            color: '#f9bc60',
            textDecoration: 'none'
          }}
        >
          create an account
        </Link>
      </div>
    </SignContainer>
  );
}
