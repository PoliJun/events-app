import React from 'react';
import Header from '../header/header';
import Footer from '../footer/Footer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = { children: PropTypes.node.isRequired };
