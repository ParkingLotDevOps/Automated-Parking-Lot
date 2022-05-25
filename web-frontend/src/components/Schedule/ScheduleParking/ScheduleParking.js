import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ScheduleParking.module.css';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function ScheduleParking(props) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);

  const [time1, setTime1] = React.useState(null);
  const [time2, setTime2] = React.useState(null);

  const [date1, setDate1] = React.useState(null);
  const [date2, setDate2] = React.useState(null);
  
  const navigate = useNavigate();

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <li className={styles.listItem}>
      <div className={styles.name}>{props.item.name}</div>
      <div className={styles.time}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label=""
            value={time1}
            onChange={(newValue) => {
              setTime1(newValue);
            }}
            renderInput={(params) => <TextField {...params} sx={{
              svg: { color: '#5b8483' },
              input: { color: '#5b8483' },
              label: { color: '#5b8483' } 
            }} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label=""
            value={time2}
            onChange={(newValue) => {
              setTime2(newValue);
            }}
            renderInput={(params) => <TextField {...params} sx={{
              svg: { color: '#5b8483' },
              input: { color: '#5b8483' },
              label: { color: '#5b8483' } 
            }} />}
          />
        </LocalizationProvider>
      </div>
      <div className={styles.checkboxes}>
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked1}
          onChange={() => setIsChecked1((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked2}
          onChange={() => setIsChecked2((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked3}
          onChange={() => setIsChecked3((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked4}
          onChange={() => setIsChecked4((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked5}
          onChange={() => setIsChecked5((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked6}
          onChange={() => setIsChecked6((prev) => !prev)}
        />
        <Checkbox
          sx={{
            color: '#E8E4E6',
            opacity: '0.4',
            '&.Mui-checked': {
              color: '#E16162',
              opacity: 1
            }
          }}
          className={styles.checkbox}
          checked={isChecked7}
          onChange={() => setIsChecked7((prev) => !prev)}
        />
      </div>

      <div className={styles.date}>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <DatePicker
            label=""
            value={date1}
            onChange={(newValue) => {
              setDate1(newValue);
            }}
            renderInput={(params) => <TextField {...params} sx={{
              svg: { color: '#5b8483' },
              input: { color: '#5b8483' },
              label: { color: '#5b8483' } 
            }} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <DatePicker
            label=""
            value={date2}
            onChange={(newValue) => {
              setDate2(newValue);
            }}
            renderInput={(params) => <TextField {...params} sx={{
              svg: { color: '#5b8483' },
              input: { color: '#5b8483' },
              label: { color: '#5b8483' } 
            }} />}
          />
        </LocalizationProvider>
      </div>
    </li>
  );
}
