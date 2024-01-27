import React from 'react';
import Header from '../header/header';
import Footer from '../footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
