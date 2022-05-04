import React from 'react';
import styles from './EditParkingLotPanel.module.css';

export default function EditParkingLotPanel() {
  return (
    <form>
      <h2>Edit</h2>
      <div className={styles.edit}>
        <input type="file" accept="image/png, image/jpeg" />
        <div className={styles.right}>
          <div className={styles.col}>
            <div className={styles.row}>
              <div className={styles.input}>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className={styles.input}>
                <label for="pricing">Pricing</label>
                <input type="number" name="pricing" id="pricing" />
              </div>
            </div>
            <div className={styles.input}>
              <label for="location">Location</label>
              <input type="text" name="location" id="location" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.input}>
              <label for="spots">Number of Spots Available</label>
              <input type="number" name="spots" id="spots" />
            </div>
            <button type="submit">Save Changes</button>
          </div>
        </div>
      </div>
    </form>
  );
};

// Google Maps API diseara pt input locatie
