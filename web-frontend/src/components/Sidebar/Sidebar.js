import React from 'react';
import Background from 'assets/background.svg';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';

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

const drawerWidth = 230;

export default function Sidebar(){
    return(
        
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
        anchor="left"
      >
        <Toolbar />
        
        <img src={Logo} className={styles.logo} alt="logo" />
        <List>
          {['Dashboard', 'Parkings', 'Schedule', 'Notification', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              { <ListItemIcon>
                    {index == 0 ? <DashboardIcon className={styles.icon} /> : 
                     index == 1 ? <ConfirmationNumberIcon className={styles.icon} /> :
                     index == 2 ? <ArticleIcon className={styles.icon}/> :
                     index == 3 ? <NotificationsIcon className={styles.icon}/> : <SettingsIcon className={styles.icon}/>
                     }
                     
              </ListItemIcon> }
              <Link to={`/${
                index == 0 ? 'dashboard' : 
                index == 1 ? 'list' :
                index == 2 ? <ArticleIcon className={styles.icon}/> :
                index == 3 ? <NotificationsIcon className={styles.icon}/> : <SettingsIcon className={styles.icon}/>
              }`}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>

        
        <div className={styles.test}>
          
          <Link to="/contact" className={styles.contact}>Contact us</Link>
          <div className={styles.box}>
              <AccountBoxRoundedIcon sx={{width: 55, height: 55 }}/>
              <p>Username</p>
              <LogoutIcon sx={{marginTop: 2, marginLeft: 4}}/>

          </div>
        </div>
        
        
                
      </Drawer>
      
    </Box>       
        
    );
}
