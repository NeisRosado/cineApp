import React from 'react';
import './movieCard.scss';

const MovieCard = ({ movie, genres }) => {
  const { poster_path, original_title, title, release_date, genre_ids, adult, backdrop_path, runtime } = movie;

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Desconocido';
  };

  return (
    <figure className="figure" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>
      <div className="figure__content">
        <h3 className="figure__content__title">{title}</h3>
        <span className="figure__content__span">Título en inglés: {original_title}</span>
        <span className="figure__content__span">Estreno: {release_date}</span>
        {/* <span className="figure__content__span">Duración: {runtime} minutos</span> */}
        <span className="figure__content__span">Género: {genre_ids.map((genreId) => getGenreName(genreId)).join(', ')}</span>
        {/* <span className="figure__content__span">Clasificación: {adult ? 'Para adultos' : 'Para todos los públicos'}</span> */}
      </div>
    </figure>
  );
};

export default MovieCard;
