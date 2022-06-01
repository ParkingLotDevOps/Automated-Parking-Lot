import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import styles from './AddParkingLot.module.css';
import { refreshToken } from 'hooks';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

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

export default function AddParkingLot({ setAddLot, updateLots }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [spots, setSpots] = useState('');

  const addParkingLot = async () => {
    const [latitude, longitude] = location.split(' ');
    const res = await fetch('https://automated-parking-lot.herokuapp.com/api/provider/parkinglot/save', {
      method: 'POST',
      body: JSON.stringify({
        name,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        price: parseFloat(price),
        spots: new Array(spots).fill({
          type: 0,
          available: true
        })
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    if (res.ok) {
      updateLots();
      setAddLot(false);
    }
    else {
      const ans = await res.text();
      if (ans.includes('The Token has expired')) {
        refreshToken({ error: JSON.parse(ans) });
        await addParkingLot();
      }
      else {
        alert(ans);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: 350,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 350,
              background: '#004643',
              fontFamily: ' "Open Sans", sans-serif',
              color: '#537f7d',
              boxSizing: 'border-box'
            }
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <main className={styles.main}>
            <h1 className={styles.name}>Add Parking Lot</h1>

            <button className={styles.CloseIcon} onClick={() => setAddLot(false)}>
              <CloseIcon className={styles.icon} />
            </button>

            <div className={styles.upload}>
              <FaCamera />
              <div className={styles.inner}>
                <input type="file" accept="image/png, image/jpeg" />
              </div>
            </div>

            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Name"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                variant="filled"
                size="small"
                className={styles.TextField}
                onInput={(e) => setName(e.target.value)}
                value={name}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
              />
            </ThemeProvider>

            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Location"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                variant="filled"
                size="small"
                className={styles.TextField}
                onInput={(e) => setLocation(e.target.value)}
                value={location}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
              />
            </ThemeProvider>

            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Pricing"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                variant="filled"
                size="small"
                className={styles.TextField}
                onInput={(e) => setPrice(e.target.value)}
                value={price}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
              />
            </ThemeProvider>

            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Number of Spots"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                variant="filled"
                size="small"
                className={styles.TextField}
                onInput={(e) => setSpots(e.target.value)}
                value={spots}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
              />
            </ThemeProvider>

            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={addParkingLot}
              >
                Add Parking
              </Button>
            </ThemeProvider>
          </main>
        </Drawer>
      </Box>
    </div>
  );
}
