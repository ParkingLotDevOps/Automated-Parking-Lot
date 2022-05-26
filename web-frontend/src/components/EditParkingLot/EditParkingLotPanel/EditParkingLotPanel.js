import React from 'react';
import { FaCamera } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './EditParkingLotPanel.module.css';

export default function EditParkingLotPanel() {
  return (
    <form className={styles.form}>
      <h2>Edit</h2>
      <div className={styles.edit}>
        <div className={styles.upload}>
          <FaCamera />
          <div className={styles.inner}>
            <input type="file" accept="image/png, image/jpeg" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.col}>
            <div className={styles.row}>
              <TextField
                label="Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: 'dodgerblue' } }}
                variant="filled"
              />
              <TextField
                label="Pricing"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: 'dodgerblue' } }}
                variant="filled"
              />
            </div>
            <TextField
              label="Location"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ input: { color: 'dodgerblue' } }}
              variant="filled"
            />
          </div>
          <div className={styles.col}>
            <TextField
              label="Number of Spots Available"
              type="number"
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
    </form>
  );
};
