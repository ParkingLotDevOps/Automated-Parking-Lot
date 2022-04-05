import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { SignIn, SignUp } from 'sign-in-up';

function PageSwitcher() {
  const [page, setPage] = React.useState('sign-in');
  return (
    <>
      <button
        className="theme-switcher"
        style={{ position: 'fixed', top: 10, left: 10, cursor: 'pointer' }}
        onClick={() => setPage(page === 'sign-in' ? 'sign-up' : 'sign-in')}
      >
        switch page
      </button>
      {page === 'sign-in' ? <SignIn /> : <SignUp />}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <PageSwitcher />
  </React.StrictMode>,
  document.getElementById('root')
);
