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
            We are a great group of passionate students from the Greatest 
            Computer Science Faculty. We made this application to help everyone 
            find the perfect parking lot in a crowded city because everybody should 
            PARK SMART 😎😍
            </p>
          </div>
        </div>
        <div className={styles.faq}>
          <h1>FAQ</h1>
          <div>
            <details>
              <summary>How can I add a new parking?</summary>
              <p>We design our app to be intuitive and simple so all you 
                have to do is to go to the Parkings Menu from the sidebar and hit 
                the big, red button Add New 🚗. To do this you need to be logged 
                in to our platform.</p>
            </details>
            <details>
              <summary>Can I manage my parking lots after I created them?</summary>
              <p>Of course, you can. You can schedule your parking lots to be free 
                whenever you want. For example, only at the weekends between 10 a.m. 
                and 10 p.m. to benefit the most clients in the week😉</p>
            </details>
            <details>
              <summary>I created a wrong parking lot. What should I do?</summary>
              <p>You can always update your parking lots from the Parkings Menu. All 
                you have to do is to select 'Edit' from the last Three Dots Button ▪▪▪ and 
                this will take you to the Edit Menu. If you do not want your parking to 
                be public anymore, you can delete it from the same menu.</p>
            </details>
            <details>
              <summary>How can I change the schedule of a parking lot?</summary>
              <p>You can change your parking lot's schedule from the Schedule Menu. 
                You can select the period you want your parking to be available, on 
                which days of the week and even at what hours.</p>
            </details>
            <details>
              <summary>How is the person who is watching this?</summary>
              <p>Really smart and cute, obviously 😉 You are using probably the greatest app on the internet.</p>
            </details>
          </div>
        </div>
      </main>
    </>
  );
}
