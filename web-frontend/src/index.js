import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

function PageSwitcher({ color, children }) {
  const [page, setPage] = React.useState('sign-in');
  return (
    <>
      <button
        className="theme-switcher"
        style={{ backgroundColor: color }}
        onClick={() => setPage(page === 'sign-in' ? 'sign-up' : 'sign-in')}
      >
        {children}
      </button>
      {page === 'sign-in' ? <SignIn /> : <SignUp />}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <PageSwitcher color="red">
      <p>a</p>
      <p>b</p>
      <p>c</p>
    </PageSwitcher>
  </React.StrictMode>,
  document.getElementById('root')
);
