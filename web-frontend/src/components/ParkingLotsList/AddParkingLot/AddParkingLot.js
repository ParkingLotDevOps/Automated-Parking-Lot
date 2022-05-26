import React, { useState } from 'react';
import styles from './AddParkingLot.module.css';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { FaCamera } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 350;

export default function AddParkingLot() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [spots, setSpots] = useState('');

  const addParkingLot = () => {
    // const [latitude, longitude] = location.split(' ');
    // fetch(
    //   'https://automated-parking-lot.herokuapp.com/api/provider/parkinglot/save',
    //   {
    //     method: 'POST',
    //     body: new URLSearchParams({
    //       name: name,
    //       latitude: parseFloat(latitude),
    //       longitude: parseFloat(longitude),
    //       price: parseFloat(price),
    //       spots: [{ type: +spots, available: true }]
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
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

            <div className={styles.CloseIcon}>
              <CloseIcon className={styles.icon} />
            </div>

            <div className={styles.upload}>
              <FaCamera />
              <div className={styles.inner}>
                <input type="file" accept="image/png, image/jpeg" />
              </div>
            </div>

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
            />

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
            />

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
            />

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
            />

            <Button
              variant="contained"
              className={styles.btn}
              onClick={addParkingLot}
            >
              Add Parking
            </Button>
          </main>
        </Drawer>
      </Box>
    </>
  );
}
