import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Logo from 'assets/logo.svg';
import styles from './Sidebar.module.css';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <Drawer
        sx={{
          width: 230,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 230,
            background: "#004643",
            fontFamily: ' "Open Sans", sans-serif',
            color: "#537f7d",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <img src={Logo} className={styles.logo} alt="logo" />

        <List>
          {[
            ['Dashboard', 'dashboard', <DashboardIcon className={styles.icon} />],
            ['Parkings', 'parking-lots', <ConfirmationNumberIcon className={styles.icon} />],
            ['Schedule', 'schedule', <ArticleIcon className={styles.icon} />],
            ['Notifications', 'notifications', <NotificationsIcon className={styles.icon} />],
            ['Settings', 'settings', <SettingsIcon className={styles.icon} />]
          ].map(([text, slug, icon]) => (
            <Link to={`/${slug}`} key={uuid()}>
              <ListItem button>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                  <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <div className={styles.test}>
          <Link to="/contact" className={styles.contact}>Contact us</Link>
          <div className={styles.box}>
            <AccountBoxRoundedIcon sx={{ width: 55, height: 55 }} />
            <p>Username</p>
            <button className={styles.logout} onClick={logout}>
              <LogoutIcon sx={{ marginTop: 2, marginLeft: 4 }} />
            </button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
