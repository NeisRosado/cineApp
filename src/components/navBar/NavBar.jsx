import React from 'react';
import './navBar.scss';
import Buttons from '../buttons/Buttons';
import Calendar from '../calendar/Calendar';
import Cinemas from '../cinemas/Cinemas';

const NavBar = ({ onGenreClick, onCinemaClick }) => { 
  return (
    <nav className='navBar'>
      <figure className='navBar__logo'>
        <img className='navBar__logo__img' src="/src/assets/logo.png" alt="Logo Cine Colombia" />
        <span className='navBar__logo__text' >CINE COLOMBIA</span>
      </figure>
      <Buttons onGenreClick={onGenreClick} />
      <Cinemas onCinemaClick={onCinemaClick} /> 
      <Calendar />
      <img src="/src/assets/avatar.png" className='navBar__avatar' alt="avatar usuario" />
    </nav>
  );
};

export default NavBar;

