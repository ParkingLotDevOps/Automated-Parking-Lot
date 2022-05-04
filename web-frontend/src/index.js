import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import '@fontsource/open-sans/700.css';
import {
  App,
  SignIn,
  SignUp,
  EditParkingLot,
  Sidebar,
  ParkingLotList
} from 'components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="edit/:name" element={<EditParkingLot />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="list" element={<ParkingLotList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
