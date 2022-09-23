import React from 'react'
import { Route, Routes } from 'react-router'
import PageAnimations from '../pages/PageAnimations';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';

const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="login/*" element={<LoginPage />} />
        <Route path="animaciones" element={<PageAnimations />} />

        <Route path="/*" element={<LogoutPage />} />
      </Routes>
    </>
  );
}

export default AppRouter