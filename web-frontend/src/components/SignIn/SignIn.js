import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SignIn.module.css';
import { useInput } from 'hooks';
import { SignContainer, BaseButton } from 'components';

export default function SignIn() {
  React.useEffect(() => {
    [...document.getElementsByTagName('svg')].filter(el => (
      el.getAttribute('width') === '1em' &&
      el.getAttribute('height') === '1em'
    )).forEach(el => el.removeAttribute('width'));
  }, []);

  const navigate = useNavigate();
  const [username, inputUsername] = useInput('Username or email address');
  const [password, inputPassword] = useInput('Password', 'password');

  const submit = async () => {
    const res = await fetch('http://localhost:8082/api/login', {
      method: 'POST',
      body: new URLSearchParams({
        username,
        password
      })
    });
    alert(res.ok ? 'Successfuly logged in!' : 'Wrong username or password!');
    if (res.ok) {
      navigate('/list');
    }
  };

  return (
    <SignContainer onSubmit={submit}>
      {inputUsername}
      {inputPassword}
      <div className={styles.right}><Link to="#">Forgot password?</Link></div>

      <BaseButton type="submit" color="yellow">Login</BaseButton>
      <div className={styles.center}>or</div>

      <div className={styles.btns}>
        <BaseButton onClick={() => alert('google')} color="red" icon="google">Login with Google</BaseButton>
        <BaseButton onClick={() => alert('facebook')} color="blue" icon="facebook">Login with Facebook</BaseButton>
      </div>

      <div className={styles.center}>
        Don't have an account?&nbsp;
        <Link to="/sign-up">Create one</Link>
      </div>
    </SignContainer>
  );
};
