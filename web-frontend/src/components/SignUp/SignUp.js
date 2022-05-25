import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormControlLabel, Checkbox } from '@mui/material';

import styles from './SignUp.module.css';
import { useInput } from 'hooks';
import { BaseButton, SignContainer } from 'components';

export default function SignUp() {
  const navigate = useNavigate();
  const [remember, setRemember] = React.useState(true);
  const [name, inputName] = useInput('Name');
  const [username, inputUsername] = useInput('Username');
  const [email, inputEmail] = useInput('Email address', 'email');
  const [password1, inputPassword1] = useInput('Password', 'password');
  const [password2, inputPassword2] = useInput('Confirm password', 'password');

  const submit = async () => {
    if (password1 !== password2) {
      alert("Passwords don't match!");
    }
    else {
      const res = await fetch('https://automated-parking-lot.herokuapp.com/api/user/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password: password1
        })
      });
      if (res.ok) {
        await fetch('https://automated-parking-lot.herokuapp.com/api/add/role', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            role: 'PARKING_LOT_PROVIDER'
          })
        });
        alert('Account successfully created!');
        navigate('/sign-in');
      }
      else {
        alert('Error: ' + (await res.text()));
      }
    }
  };

  return (
    <SignContainer onSubmit={submit}>
      <h2 className={styles.title}>Create an account</h2>
      {inputName}
      {inputUsername}
      {inputEmail}
      {inputPassword1}
      {inputPassword2}

      <div>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={() => {
                setRemember(!remember);
              }}
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

      <BaseButton color="yellow" type="submit">
        Let's go!
      </BaseButton>

      <div className={styles.signin}>
        Already have an account?&nbsp;
        <Link to="/sign-in" className={styles.link}>Sign in</Link>
      </div>
    </SignContainer>
  );
};
