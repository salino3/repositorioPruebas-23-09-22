import React from 'react'
import { Route, Routes } from 'react-router';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <SecondPage />
      {/*  */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default LoginPage