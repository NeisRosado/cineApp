import React from 'react';
import './movieCard.scss';

const MovieCard = ({ movie }) => {
  const { poster_path, original_title, title, release_date, genres } = movie;

  return (
    <figure className="figure" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>
      <div className="figure__content">
        <h3 className="figure__content__title">{title}</h3>
        <span className="figure__content__span">Título en inglés: {original_title}</span>
        <span className="figure__content__span">Estreno: {release_date}</span>
      </div>
    </figure>
  );
};

export default MovieCard;
