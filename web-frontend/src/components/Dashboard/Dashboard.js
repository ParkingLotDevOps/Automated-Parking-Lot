import React from 'react';
import styles from './Dashboard.module.css';
import { useParams } from 'react-router-dom';
import { Sidebar } from 'components';
import TheHeader from 'components/TheHeader/TheHeader';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function EditParkingLot() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 240,
    backgroundColor: '#004643',
    borderRadius: '1rem',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Dashboard" />

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={7}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item></Item>
                </Grid>
                <Grid item xs={7}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item></Item>
                </Grid>
            </Grid>
        </Box>

      </main>
    </>
  );
};
