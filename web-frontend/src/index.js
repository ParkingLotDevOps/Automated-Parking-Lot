import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

function PageSwitcher() {
  const [page, setPage] = React.useState('sign-in', 'sign-up');
  return (
    <>
      <button
        className="theme-switcher"
        onClick={() => setPage(page === 'sign-in' ? 'sign-up' : 'sign-in')}
      >
        switch
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
