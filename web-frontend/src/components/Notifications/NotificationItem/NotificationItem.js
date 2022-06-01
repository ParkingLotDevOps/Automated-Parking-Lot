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

export default function NotificationItem({ item }) {
  return (
    <>
      <li className={styles.listItem}>
        <div className={styles.header}>
          <div className="title">{item.name}</div>
          <ThemeProvider theme={buttonTheme}>
            <Button variant="outlined">
              Block
            </Button>
          </ThemeProvider>
        </div>
        <p className="content">{item.content}</p>
      </li>
    </>
  );
}
