import React from 'react';
import { Link } from 'react-router-dom';
import { FormControlLabel, Checkbox } from '@mui/material';

import styles from './SignUp.module.css';
import { useInput } from 'hooks';
import { BaseButton, SignContainer } from 'components';

export default function SignUp() {
  const [remember, setRemember] = React.useState(true);
  const [username, inputUsername] = useInput('Username');
  const [email, inputEmail] = useInput('Email address');
  const [country, inputCountry] = useInput('Country');
  const [password1, inputPassword1] = useInput('Password', 'password');
  const [password2, inputPassword2] = useInput('Confirm password', 'password');

  return (
    <SignContainer>
      <h2 className={styles.title}>Create an account</h2>
      {inputUsername}
      {inputEmail}
      {inputCountry}
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

      <BaseButton
        color="yellow"
        onClick={() => {
          alert(password1 == password2
            ? 'passwords do match!'
            : 'passwords don\'t match!');
          alert(remember
            + '\n' + username
            + '\n' + email
            + '\n' + country
            + '\n' + password1
            + '\n' + password2);
        }}
      >
        Let's go!
      </BaseButton>

      <div className={styles.signin}>
        Already have an account?&nbsp;
        <Link to="/sign-in" className={styles.link}>Sign in</Link>
      </div>
    </SignContainer>
  );
};
