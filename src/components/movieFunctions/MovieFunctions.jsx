import React from 'react';
const MovieFunctions = ({ functionsWithDetails }) => {
  return (
    <div>
      {functionsWithDetails.map((func) => (
        <div key={func.id}>
          {func.cinema && (
            <>
              <h2>{func.cinema.name}</h2>
              <p>{func.cinema.location}</p>
            </>
          )}
          <h3>Horarios:</h3>
          {func.showtimes.map((showtime) => (
            <button key={showtime.time}>{showtime.time}</button>
          ))}
          <button>Seleccionar boletos</button>
        </div>
      ))}
    </div>
  );
};

export default MovieFunctions;
