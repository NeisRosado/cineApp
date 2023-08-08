import React from 'react';
import NavBar from '../navBar/NavBar';
import HeaderCards from '../headerCards/HeaderCards';

const Header = ({ onGenreClick, onCinemaClick }) => {
  return (
    <>
      <NavBar onGenreClick={onGenreClick} onCinemaClick={onCinemaClick} />
      <HeaderCards />
    </>
  );
};

export default Header;