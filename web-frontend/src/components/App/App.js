import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <ul>
        <li><Link to="/sign-in">SignIn</Link></li>
        <li><Link to="/sign-up">SignUp</Link></li>
      </ul>
    </>
  );
};
