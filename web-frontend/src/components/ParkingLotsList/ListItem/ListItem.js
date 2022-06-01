import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ListItem.module.css';
import { FaCalendarAlt as Calendar, FaStar as Star } from 'react-icons/fa';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const formatDate = (d) => {
  const date = new Date(d);
  let year = date.getFullYear();
  let month = date.toLocaleDateString('default', { month: 'long' });
  let day = date.getDate();
  day = day < 10 ? ('0' + day).substring(0, 2) : day;
  return day + ' ' + month.substring(0, 3) + ', ' + year;
};

export default function LisItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

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
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div>{props.item.name}</div>
      <div>{props.item.location}</div>
      <div className={styles.date}>
        <span>
          <Calendar />
        </span>
        {formatDate(props.item.date)}
      </div>
      <div className={`${styles.status} ${styles[props.item.status]}`}>
        {props.item.status}
      </div>
      <Checkbox
        className={styles.fav}
        icon={<Star />}
        checkedIcon={<Star />}
        sx={{
          opacity: '0.2',
          color: '#E8E4E6',
          '&.Mui-checked': {
            opacity: 1,
            color: '#ABD1C6'
          }
        }}
      />

      <div className={styles.menuBtn}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch'
            }
          }}
        >
          <MenuItem onClick={() => {
            navigate(`/edit/${props.item.name.replace(/ /g, '-')}`)
          }}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => {
            // TODO delete account
            handleClose();
          }}>
            Delete
          </MenuItem>
        </Menu>
      </div>
    </li>
  );
}
