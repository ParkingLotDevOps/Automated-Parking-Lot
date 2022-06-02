import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import styles from './AddParkingLot.module.css';
import { makeRequest } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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
  const navigate = useNavigate();

  const addParkingLot = async () => {
    const [latitude, longitude] = location.split(' ');
    const res = await makeRequest(navigate, 'provider/parkinglot/save', 'POST', {
      name,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      price: parseFloat(price),
      spots: new Array(spots).fill({
        type: 0,
        available: true
      })
    });
    if (res != null) {
      const lot_id = res.id;
      for (let i = 1; i < spots; i++) {
        const res = await makeRequest(navigate, 'parkingspots', 'POST', {
          type: 0,
          available: true,
          line: 1,
          name: uuid()
        });
        if (res != null) {
          const spot_id = res.id;
          await makeRequest(navigate, 'parkinglot/add/parkingspot', 'POST', {
            lot_id,
            spot_id
          });
        }
        updateLots();
        setAddLot(false);
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
