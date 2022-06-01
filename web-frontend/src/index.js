import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import '@fontsource/open-sans/700.css';
import {
  SignIn,
  SignUp,
  Dashboard,
  ParkingLotList,
  ScheduleParkings,
  NotificationsList,
  Settings,
  Contact,
  EditParkingLot
} from 'components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parking-lots" element={<ParkingLotList />} />
        <Route path="/schedule" element={<ScheduleParkings />} />
        <Route path="/notifications" element={<NotificationsList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:name" element={<EditParkingLot />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
