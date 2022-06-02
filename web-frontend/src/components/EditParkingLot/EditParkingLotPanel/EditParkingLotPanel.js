import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { makeRequest } from 'hooks';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './EditParkingLotPanel.module.css';
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

export default function EditParkingLotPanel() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [pricing, setPricing] = React.useState(0);
  const [spots, setSpots] = React.useState(0);
  const [location, setLocation] = React.useState('');

  const updateParkingLot = async () => {
    const [latitude, longitude] = location.split(' ');
    const res = await makeRequest(navigate, 'provider/parkinglot/save', 'POST', {
      name,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      price: parseFloat(pricing),
    });
    if (res != null) {
      alert('Done!');
    }
  };

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
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  label="Name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </ThemeProvider>
              <ThemeProvider theme={textFieldTheme}>
                <TextField
                  label="Pricing"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    input: { color: '#E8E4E6' },
                    "& label": {color: "secondary.main"}
                  }}
                  variant="filled"
                  value={pricing}
                  onChange={event => setPricing(event.target.value)}
                />
              </ThemeProvider>
            </div>
            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Location"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
                variant="filled"
                value={location}
                onChange={event => setLocation(event.target.value)}
              />
            </ThemeProvider>
          </div>
          <div className={styles.col}>
            <ThemeProvider theme={textFieldTheme}>
              <TextField
                label="Number of Spots Available"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  input: { color: '#E8E4E6' },
                  "& label": {color: "secondary.main"}
                }}
                variant="filled"
                value={spots}
                onChange={event => setSpots(event.target.value)}
              />
            </ThemeProvider>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" sx={{ height: 55 }} onClick={updateParkingLot}>
                Save Changes
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </form>
  );
};
