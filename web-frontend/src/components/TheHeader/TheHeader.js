import React from 'react';
import styles from './TheHeader.module.css';
import { BaseButton } from 'components';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function TheHeader(props) {
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
        {props.hasButton && <BaseButton icon="plus">Add New</BaseButton>}
      </div>
    </section>
  );
}
