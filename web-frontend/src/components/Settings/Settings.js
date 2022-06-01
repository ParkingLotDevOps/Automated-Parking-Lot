import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Sidebar } from 'components';
import { FaCamera } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Settings.module.css';

export default function Settings() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.name}>name</h1>
        <form className={styles.form}>
          <h2>Settings</h2>
          <div className={styles['personal-data']}>
            <div className={styles.upload}>
              <FaCamera />
              <div className={styles.inner}>
                <input type="file" accept="image/png, image/jpeg" />
              </div>
            </div>
            <div className={styles.right}>
              <h2>Personal Data</h2>
              <div className={styles.top}>
                <TextField
                  label="First Name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ input: { color: '#E8E4E6' } }}
                  variant="filled"
                />
                <TextField
                  label="Last Name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ input: { color: 'dodgerblue' } }}
                  variant="filled"
                />
              </div>
              <div className={styles.bottom}>
                <TextField
                  label="Phone Number"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ input: { color: 'dodgerblue' } }}
                  variant="filled"
                />
                <Button variant="contained" sx={{ height: 55 }}>
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.change}>
            <div className={styles['change-email']}>
              <h2>Change E-mail</h2>
              <TextField
                label="New E-mail"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: '#E8E4E6' } }}
                variant="filled"
              />
              <Button variant="contained" sx={{ height: 55 }}>
                Save Changes
              </Button>
            </div>
            <div className={styles['change-password']}>
              <h2>Change Password</h2>
              <TextField
                label="Old Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: '#E8E4E6' } }}
                variant="filled"
              />
              <TextField
                label="New Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: '#E8E4E6' } }}
                variant="filled"
              />
              <TextField
                label="Confirm New Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: '#E8E4E6' } }}
                variant="filled"
              />
              <Button variant="contained" sx={{ height: 55 }}>
                Save Changes
              </Button>
            </div>
          </div>
          <div className={styles.delete}>
            <Button variant="contained" sx={{ height: 55 }}>
              Delete Account
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
