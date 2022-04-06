import React from 'react';
import { TextField } from '@mui/material';
import { SignContainer } from 'components';
import { BaseButton } from 'components';

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
      
      <BaseButton 
        content="Login"
        color="yellow"
      />

      <div style={{ textAlign: 'center', lineHeight: 1 }}>
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

      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        or create an account
      </div>
    </SignContainer>
  );
};
