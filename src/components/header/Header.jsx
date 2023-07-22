import React from 'react';
import NavBar from '../navBar/NavBar';

const Header = ({ onGenreClick, onCinemaClick }) => { 
  return (
    <>
      <NavBar onGenreClick={onGenreClick} onCinemaClick={onCinemaClick} /> 
    </>
  );
};

export default Header;
