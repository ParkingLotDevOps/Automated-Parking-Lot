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

export async function refreshToken(ans) {
  if (ans.error.startsWith('The Token has expired')) {
    const res = await fetch('https://automated-parking-lot.herokuapp.com/api/token/refresh', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('refresh-token')
      }
    });
    const ans = await res.json();
    localStorage.setItem('token', ans.access_token);
    localStorage.setItem('refresh-token', ans.refresh_token);
  }
  else {
    alert(ans.error);
  }
};

export async function getUserData() {
  const res = await fetch('https://automated-parking-lot.herokuapp.com/api/user/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('refresh-token')
    }
  });
  const ans = await res.json();
  if (!res.ok) {
    refreshToken(ans);
    return getUserData();
  }
  return ans;
};
