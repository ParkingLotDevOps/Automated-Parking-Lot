import React from 'react';
import { TextField } from '@mui/material';
import { BaseButton } from 'sign-in-up';

export default function SignIn() {
  return (
    <>
      <br />
      <br />
      <BaseButton
        content="LogIn with FaceBook"
        color="blue"
        icon="facebook"
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </>
  );
};
