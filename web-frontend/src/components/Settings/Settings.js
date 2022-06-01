import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Sidebar } from 'components';
import { FaCamera } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import styles from './Settings.module.css';

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
                    label="First Name"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      input: { color: '#E8E4E6' },
                      "& label": {color: "secondary.main"}
                    }}
                    variant="filled"
                  />
                </ThemeProvider>
                <ThemeProvider theme={textFieldTheme}>
                  <TextField
                    label="Last Name"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      input: { color: '#E8E4E6' },
                      "& label": {color: "secondary.main"}
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
                      shrink: true,
                    }}
                    sx={{
                      input: { color: '#E8E4E6' },
                      "& label": {color: "secondary.main"}
                    }}
                    variant="filled"
                  />
                </ThemeProvider>
                <ThemeProvider theme={buttonTheme}>
                  <Button variant="contained" sx={{ height: 55 }}>
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
                  label="New E-mail"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={buttonTheme}>
                <Button variant="contained" sx={{ height: 55 }}>
                  Save Changes
                </Button>
              </ThemeProvider>
            </div>
            <div className={styles['change-password']}>
              <h2>Change Password</h2>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  label="Old Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  label="New Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  label="Confirm New Password"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                />
              </ThemeProvider>
              <ThemeProvider theme={buttonTheme}>
                <Button variant="contained" sx={{ height: 55 }}>
                  Save Changes
                </Button>
              </ThemeProvider>
            </div>
          </div>
          <div className={styles.delete}>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="outlined" sx={{ height: 55 }}>
              Delete Account
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </main>
    </>
  );
}
