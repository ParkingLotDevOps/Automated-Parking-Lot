import React from 'react';
import styles from './Contact.module.css';
import { Sidebar } from 'components';
export default function Contact() {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.contact}>
            <h1>Contact</h1>
            <ul>
              <li>Phone: <a href="tel:0755555555">0755555555</a></li>
              <li>Email: <a href="mailto:automated.parking@b3.com">automated.parking@b3.com</a></li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className={styles.about}>
            <h1>About Us</h1>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum lacus sollicitudin posuere cursus. Fusce dignissim id lectus sit amet faucibus. Pellentesque in arcu maximus, ornare ex non, efficitur enim. Sed rhoncus dolor est, iaculis hendrerit ligula sollicitudin et. Integer posuere dignissim mollis.
            </p>
          </div>
        </div>
        <div className={styles.faq}>
          <h1>FAQ</h1>
        </div>
      </main>
    </>
  );
}