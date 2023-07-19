import React from 'react';
import NavBar from '../navBar/NavBar';
import HeaderCards from '../headerCards/HeaderCards';

const Header = ({ onGenreClick }) => {
  return (
    <>
      <NavBar onGenreClick={onGenreClick} />
      <HeaderCards />
    </>
  );
};

export default Header;
