import React from 'react';
import { TextField } from '@mui/material';
import { SignContainer } from 'components';
import BaseButton from 'components/BaseButton/BaseButton';

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
    </SignContainer>
  );
};
