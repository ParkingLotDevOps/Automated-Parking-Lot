import React from 'react';
import styles from './TheHeader.module.css';
import { BaseButton } from 'components';
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

export default function TheHeader(props) {
  const navigate = useNavigate();
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  return (
    <section className={styles.header}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.actions}>
        {props.hasSearchBox && (
          <div className={styles.searchBox}>
            <InputBase placeholder="Search" />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </div>
        )}
        {props.hasButton && <BaseButton icon="plus" onClick={() => navigate('/addParkingLot')}>Add New</BaseButton>}
        {props.hasFirstDate && (
          <div className={styles.data}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
              <DatePicker
                label=""
                value={value1}
                onChange={(newValue) => {
                  setValue1(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{
                  svg: { color: '#5b8483' },
                  input: { color: '#5b8483' },
                  label: { color: '#5b8483' }
                }} />}
              />
            </LocalizationProvider>
          </div>
        )}
        {props.hasLastDate && (
          <div className={styles.data}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
              <DatePicker
                label=""
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{
                  svg: { color: '#5b8483' },
                  input: { color: '#5b8483' },
                  label: { color: '#5b8483' }
                }} />}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>
    </section>
  );
}
