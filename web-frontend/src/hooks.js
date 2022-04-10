import React from 'react';
import { TextField } from '@mui/material';

export function useInput(label, type) {
  const [input, setInput] = React.useState('');
  const inputField = (
    <TextField
      fullWidth
      variant="standard"
      type={type || 'text'}
      label={label}
      value={input}
      onChange={event => setInput(event.target.value)}
      InputLabelProps={{ style: { color: '#abd1c6' } }}
    />
  );
  return [input, inputField];
};
