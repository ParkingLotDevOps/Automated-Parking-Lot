import * as React from 'react';
import styles from './Dashboard.module.css';
import { useParams } from 'react-router-dom';
import { Sidebar } from 'components';
import TheHeader from 'components/TheHeader/TheHeader';

import OrderList from 'components/Dashboard/OrderList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function EditParkingLot() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    height: 280,
    backgroundColor: '#004643',
    borderRadius: '1rem',
    color: theme.palette.text.secondary,
  }));

  const fields = ['Traking no', 'Costumer', 'Price', 'Total Time', 'Parking Lot'];
  const items = [
    {
      id: '1',
      trakingNo: '#876364',
      costumer: 'Camera Lens',
      price: '$178',
      time: '15:00:00',
      lot: 'Palas'
    },
    {
      id: '2',
      trakingNo: '#876368',
      costumer: 'Black Sleep Dress',
      price: '$14',
      time: '14:23:00',
      lot: 'Kaufland'
    },
    {
      id: '3',
      trakingNo: '#876412',
      costumer: 'Argan Oil',
      price: '$21',
      time: '05:00:00',
      lot: 'Palas'
    },
    {
      id: '4',
      trakingNo: '#876412',
      costumer: 'Eau de Parfum',
      price: '$32',
      time: '00:30:00',
      lot: 'Iulius Mall'
    }
  ];

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <TheHeader title="Dashboard" className={styles.pageName} />
        {/* <h1>Dashboard</h1> */}
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={4}>
                <Grid item xs={7}>
                    <Item></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item></Item>
                </Grid>
                <Grid item xs={7}>
                    <Item>
                    <p className={styles.itemGrid}> Recent Orders <MoreHorizIcon className={styles.more}/></p>
                      <ul className={styles.listItems}>
                        <li className={styles.listFields} key="0">
                          <div style={{ width: '2%' }}></div>
                          {fields.map((field) => (
                            <div key={field.id}>{field}</div>
                          ))}
                          <div style={{ width: '10%' }}></div>
                        </li>
                        {items.map((item) => (
                          <OrderList key={item.id} item={item} />
                        ))}
                      </ul>

                    </Item>
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
