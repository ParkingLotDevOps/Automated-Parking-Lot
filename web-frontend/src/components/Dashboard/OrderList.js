import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OrderList.module.css';
import { FaCalendarAlt as Calendar, FaStar as Star } from 'react-icons/fa';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';


export default function LisItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const options = ['Edit', 'Delete'];

  const ITEM_HEIGHT = 5;

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
      
      <div>{props.item.trakingNo}</div>
      <div>{props.item.costumer}</div>
      <div>{props.item.price}</div>  
      <div>{props.item.time}</div>  
      <div>{props.item.lot}</div>  
      
      
    </li>
  );
}