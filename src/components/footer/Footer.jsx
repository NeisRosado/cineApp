import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <figure className='footer__logo'>
        <img className='footer__logo__img' src="/src/assets/logo.png" alt="Logo Cine Colombia" />
        <span className='footer__logo__text' >CINE COLOMBIA</span>
      </figure>
      <span className='footer__copyright'>© 2023 Cine Colombia</span>
    </div>
    
  )
}

export default Footer