import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contact.module.css';
import { Sidebar } from 'components';

export default function Contact() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/sign-in');
    }
  });
  if (localStorage.getItem('token') == null) {
    return <></>;
  }

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
          <div>
            <details>
              <summary>Random question about something?</summary>
              <p>Always.</p>
            </details>
            <details>
              <summary>Another random question about something equally random that no one cares about?</summary>
              <p>FAQ.</p>
            </details>
            <details>
              <summary>Oh yeah?</summary>
              <p>Yeah.</p>
            </details>
            <details>
              <summary>Will someone answer to this question?</summary>
              <p>Yes, someone will. Here is the answer, I hope you’ll have a great day.</p>
            </details>
            <details>
              <summary>Is this the last question?</summary>
              <p>Hopefully.</p>
            </details>
          </div>
        </div>
      </main>
    </>
  );
}
