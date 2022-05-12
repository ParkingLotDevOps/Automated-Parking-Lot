import React from 'react';
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

  return (
  <>
    <Box sx={{ display: 'flex'}} >

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: "#004643",
            fontFamily: ' "Open Sans", sans-serif',
            color: "#537f7d",
            boxSizing: 'border-box',
          },
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
              shrink: true,
            }}
            variant="filled"
            size="small"
            className={styles.TextField}
          />

          <TextField
            label="Location"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            size="small"
            className={styles.TextField}
          />

          <TextField
            label="Pricing"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            size="small"
            className={styles.TextField}
          />

          <TextField
            label="Number of Slots"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            size="small"
            className={styles.TextField}
          />
          
          <TextField
            label="Camera ID"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            size="small"
            className={styles.TextField}
          />  
      
          <Button variant="contained" className={styles.btn}>Add Parking</Button>


        </main> 
      </Drawer>

    </Box>    


  </>
  );
};


      