import React from 'react'
import { Route, Routes } from 'react-router';
import NotFound from '../components/NotFound';
import StartPage from '../pages/StartPage';

const LogoutPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default LogoutPage