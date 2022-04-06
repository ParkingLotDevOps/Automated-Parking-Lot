import React from 'react';
import { TextField } from '@mui/material';
import { SignContainer } from 'components';

export default function SignIn() {
  return (
    <SignContainer>
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
    </SignContainer>
  );
};
