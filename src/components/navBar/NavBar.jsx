import React from 'react'
import "./navBar.scss"
import Buttons from '../buttons/Buttons'
import List from '../list/List'
import Calendar from '../calendar/Calendar'
import Cinemas from '../cinemas/Cinemas'

const NavBar = () => {
  const listasDesplegables = [
      {
        id: 1,
        name: 'Cine cercano',
        opciones: 'Salitre'
      },
      {
        id: 2,
        name: 'Fecha',
        opciones: 11/17/2023,
      },
    ]

  return (
    <nav className='navBar'>
      <figure className='navBar__logo'>
        <img className='navBar__logo__img' src="/src/assets/logo.png" alt="Logo Cine Colombia" />
        <span className='navBar__logo__text' >CINE COLOMBIA</span>
      </figure>
      <Buttons />
      <Cinemas />
      <Calendar />
      <img src="/src/assets/avatar.png" className='navBar__avatar' alt="avatar usuario" />
      {/* <List list= {listasDesplegables} className="navBar__list" /> */}
    </nav>
  )
}

export default NavBar