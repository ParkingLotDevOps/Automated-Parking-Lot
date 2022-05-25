import * as React from 'react';
import styles from './analytics.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const percentage = 80;
const featured = () => {
    return(
        <div className={styles.featuredChart}>
            <div style={{ width: 150, height: 150 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10} styles={buildStyles({
                     pathColor: `rgba(225,97,98, ${percentage / 100})`,
                     textColor: '#e8e4e6',
                     trailColor: '#e8e4e6',
                })}  />
            </div>
            <div className={styles.pos}>
                <div className={styles.rectangle} />
                <p>Total occupation time</p>
            </div>
        </div>
    )
}

export default featured