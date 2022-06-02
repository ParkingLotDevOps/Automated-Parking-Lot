import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Sidebar } from 'components';
import { FaCamera } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import styles from './Settings.module.css';
import { getUserData } from 'hooks';

const textFieldTheme = createTheme({
  palette: {
    primary: {
      main: '#E8E4E6'
    },
    secondary: {
      main: '#ABD1C6'
    }
  }
});

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#E16162'
    }
  }
});

export default function Settings() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updateUserData = async () => {
    const res = await fetch(
      'https://automated-parking-lot.herokuapp.com/api/user',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          body: JSON.stringify({
            email: userEmail,
            name: userName + ' ' + userSurname
          })
        }
      }
    );
    const ans = res.json();
    if (ans.ok) {
      aler('Changes saved');
    } else {
      console.log(res);
    }
  };

  const changePassword = async () => {
    if (confirmPassword !== newPassword) {
      alert("Passwords don't match !");
      return;
    }

    const res = await fetch(
      'https://automated-parking-lot.herokuapp.com/api/user/restepassword',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword
          })
        }
      }
    );
    const ans = res.json();
    if (ans.ok) {
      aler('Changes saved');
    } else {
      console.log(res);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    } else {
      async function fetchData() {
        return await getUserData();
      }
      fetchData().then((res) => {
        let [name, surname] = res.name.split(' ');
        setUserEmail(res.email);
        setUserName(!name ? '' : name);
        setUserSurname(!surname ? '' : surname);
      });
    }
  }, []);

  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.name}>Username</h1>
        <form className={styles.form}>
          <h2>Settings</h2>
          <div className={styles['personal-data']}>
            <div className={styles.left}>
              <div className={styles.upload}>
                <FaCamera />
                <div className={styles.inner}>
                  <input type="file" accept="image/png, image/jpeg" />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <h2>Personal Data</h2>
              <div className={styles.top}>
                <ThemeProvider theme={textFieldTheme}>
                  <TextField
                    value={userName}
                    onInput={(e) => setUserName(e.target.value)}
                    label="First Name"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                    sx={{
                      width: '49%',
                      input: { color: '#E8E4E6' },
                      '& label': { color: 'secondary.main' }
                    }}
                    variant="filled"
                  />
                </ThemeProvider>
                <ThemeProvider theme={textFieldTheme}>
                  <TextField
                    value={userSurname}
                    onInput={(e) => setUserSurname(e.target.value)}
                    label="Last Name"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                    sx={{
                      width: '49%',
                      input: { color: '#E8E4E6' },
                      '& label': { color: 'secondary.main' }
                    }}
                    variant="filled"
                  />
                </ThemeProvider>
              </div>
              <div className={styles.bottom}>
                <ThemeProvider theme={textFieldTheme}>
                  <TextField
                    label="Phone Number"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                    sx={{
                      input: { color: '#E8E4E6' },
                      '& label': { color: 'secondary.main' }
                    }}
                    variant="filled"
                  />
                </ThemeProvider>
                <ThemeProvider theme={buttonTheme}>
                  <Button
                    variant="contained"
                    sx={{ height: 55 }}
                    onClick={updateUserData}
                  >
                    Save Changes
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
          <div className={styles.change}>
            <div className={styles['change-email']}>
              <h2>Change E-mail</h2>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  value={userEmail}
                  onInput={(e) => setUserEmail(e.target.value)}
                  label="E-mail"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    '& label': { color: 'secondary.main' }
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={buttonTheme}>
                <Button
                  variant="contained"
                  sx={{ height: 55 }}
                  onClick={updateUserData}
                >
                  Save Changes
                </Button>
              </ThemeProvider>
            </div>
            <div className={styles['change-password']}>
              <h2>Change Password</h2>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  value={oldPassword}
                  onInput={(e) => setOldPassword(e.target.value)}
                  label="Old Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    '& label': { color: 'secondary.main' }
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  value={newPassword}
                  onInput={(e) => setNewPassword(e.target.value)}
                  label="New Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    '& label': { color: 'secondary.main' }
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  value={confirmPassword}
                  onInput={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm New Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    '& label': { color: 'secondary.main' }
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={buttonTheme}>
                <Button
                  variant="contained"
                  sx={{ height: 55 }}
                  onClick={changePassword}
                >
                  Save Changes
                </Button>
              </ThemeProvider>
            </div>
          </div>
          <div className={styles.delete}>
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="outlined"
                sx={{ height: 55 }}
                onClick={() => {
                  const fun = (count) => {
                    let really = '';
                    for (let i = 0; i < count; i++) {
                      really += ' really';
                    }
                    if (
                      confirm(
                        `Are you${really} sure you want to delete your account? ;(`
                      )
                    ) {
                      fun(count + 1);
                    }
                  };
                  fun(0);
                }}
              >
                Delete Account
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </main>
    </>
  );
}
