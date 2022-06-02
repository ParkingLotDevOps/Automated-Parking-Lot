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

export async function refreshToken() {
  if (localStorage.getItem('refresh-token') == null) return false;
  const res = await fetch('https://automated-parking-lot.herokuapp.com/api/token/refresh', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('refresh-token')
    }
  });
  if (!res.ok) return false;
  const ans = (await res.json()) || { };
  if (ans.error != null) return false;
  localStorage.setItem('token', ans.access_token);
  localStorage.setItem('refresh-token', ans.refresh_token);
  return true;
};

export async function makeRequest(navigate, path, method, body) {
  if (!(await refreshToken())) {
    navigate('/sign-in');
    return null;
  }
  const res = await fetch(`https://automated-parking-lot.herokuapp.com/api/${path}`, {
    method,
    ...(body == null ? { } : { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  });
  const ansText = await res.text();
  const ansJSON = ansText.startsWith('{')
    ? JSON.parse(ansText)
    : { error: ansText };
  if (ansJSON.error != null) {
    alert(ansJSON.error);
    return null;
  }
  else {
    return ansJSON;
  }
};
