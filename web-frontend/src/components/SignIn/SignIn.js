import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SignIn.module.css';
import { useInput } from 'hooks';
import { SignContainer, BaseButton } from 'components';

export default function SignIn() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate('/dashboard');
    }
  });
  if (localStorage.getItem('token') != null) {
    return;
  }

  React.useEffect(() => {
    [...document.getElementsByTagName('svg')].filter(el => (
      el.getAttribute('width') === '1em' &&
      el.getAttribute('height') === '1em'
    )).forEach(el => el.removeAttribute('width'));
  }, []);

  const [email, inputEmail] = useInput('Email address', 'email');
  const [password, inputPassword] = useInput('Password', 'password');

  const submit = async () => {
    const res = await fetch('https://automated-parking-lot.herokuapp.com/api/login', {
      method: 'POST',
      body: new URLSearchParams({
        email,
        password
      })
    });
    if (res.ok) {
      localStorage.setItem('token', (await res.json()).access_token);
      navigate('/parking-lots');
    }
    else {
      alert('Wrong email or password!');
    }
  };

  return (
    <SignContainer onSubmit={submit}>
      {inputEmail}
      {inputPassword}
      <div className={styles.right}><Link to="#">Forgot password?</Link></div>

      <BaseButton type="submit" color="yellow">Login</BaseButton>
      <div className={styles.center}>or</div>

      <div className={styles.btns}>
        <BaseButton title="This feature is not yet available." color="red" icon="google">Login with Google</BaseButton>
        <BaseButton title="This feature is not yet available." color="blue" icon="facebook">Login with Facebook</BaseButton>
      </div>

      <div className={styles.center}>
        Don't have an account?&nbsp;
        <Link to="/sign-up">Create one</Link>
      </div>
    </SignContainer>
  );
};
