import React, { useState, useContext } from 'react';
import './movieFunctions.scss';
import { DateContext } from '../calendar/Calendar'; 
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const MovieFunctions = ({ functionsWithDetails }) => {
  const { selectedDate } = useContext(DateContext); 
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const navigate = useNavigate();

  const handleShowtimeClick = (showtime) => {
    setSelectedShowtime(showtime);
  };

  const handleSelectTickets = () => {
    if (selectedShowtime) {
      navigate(`/tickets/${selectedShowtime.id}`);
    }
  };

  console.log('fecha en movieFunctions', selectedDate);

  return (
    <figure className='functions'>
      {functionsWithDetails.map((func) => (
        <div key={func.id} className='functions__container'>
          {func.cinema && (
            <>
             {selectedDate && (
                <h5 className='functions__title'>Horarios disponibles - {format(selectedDate, 'd MMMM yyyy', { locale: es })}</h5>
              )}
              <h6 className='functions__title'>Elige el horario que prefieras</h6>
              <span className='functions__title'>{func.cinema.name}</span>
              <br />
            </>
          )}
          {func.showtimes.map((showtime) => (
            <button
              className={`functions__buttons${selectedShowtime === showtime ? ' selected' : ''}`}
              key={showtime.time}
              onClick={() => handleShowtimeClick(showtime)}
            >
              {showtime.time}
            </button>
          ))}
          <br />
          <button
            className={`functions__tickets${selectedShowtime ? ' active' : ''}`}
            disabled={!selectedShowtime}
            onClick={handleSelectTickets} 
          >
            Seleccionar boletos
          </button>
        </div>
      ))}
    </figure>
  );
};

export default MovieFunctions;
