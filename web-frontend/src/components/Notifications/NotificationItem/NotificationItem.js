import * as React from 'react';
import styles from './NotificationItem.module.css';
import { createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#E16162'
    }
  }
});

export default function NotificationItem({ item, onClick }) {
  return (
    <>
      <li className={styles.listItem}>
        <div className={styles.header}>
          <h3 className="title">{item.name}</h3>
          <ThemeProvider theme={buttonTheme}>
            <Button variant="outlined" onClick={onClick}>
              Delete
            </Button>
          </ThemeProvider>
        </div>
        <p className="content">{item.content}</p>
      </li>
    </>
  );
}
