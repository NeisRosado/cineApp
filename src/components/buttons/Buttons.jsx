import React from 'react';
import './buttons.scss';

const Buttons = ({ onGenreClick }) => {
  const buttonsList = [
    { id: 28, name: 'Acción' },
    { id: 12, name: 'Aventura' },
    { id: 878, name: 'Ciencia Ficción' },
    { id: 35, name: 'Comedia' },
    { id: 27, name: 'Terror' },
  ];

  return (
    <>
      <div>
        {buttonsList.map((category) => (
          <button key={category.id} onClick={() => onGenreClick(category.id)} className='text'>
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
