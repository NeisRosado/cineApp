import React from 'react';
import './cinemas.scss';

const Cinemas = ({ onCinemaClick }) => {
  const cinemas = [
    { id: 1, name: 'Caribe Plaza' },
    { id: 2, name: 'La Castellana' },
    { id: 3, name: 'Plaza Bocagrande' },
  ];

  return (
    <div className="cinemas">
      <span className="cinemas__span">Cines cercanos </span>
      <select className="cinemas__select" onChange={(event) => onCinemaClick(parseInt(event.target.value))}>
        <option value="">Seleccione un cine</option>
        {cinemas.map((cinema) => (
          <option key={cinema.id} value={cinema.id}>
            {cinema.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cinemas;
