import React from 'react';
import './movies.scss';

const Movies = ({ movie, genres, selectedGenre, onClick }) => {
  const { poster_path, original_title, title, release_date, genre_ids, adult, duration } = movie;

  const getGenreNames = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : 'Desconocido';
    });
    return genreNames.join(', ');
  };

  return (
    <figure className="movies" onClick={onClick}>
      <div className="movies__content">
        <img className="movies__content__images" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div className='movies__content__text'>
          <span className="movies__content__text__title">{title}</span>
          <span className="movies__content__text__span">Título en inglés: {original_title}</span>
          <span className="movies__content__text__span">Estreno: {release_date}</span>
          <span className="movies__content__text__span">Género: {getGenreNames(genre_ids)}</span>
          <br />
          <div>
            <span className="movies__content__text__container">Recomendada: {adult ? 'Para adultos' : 'Apta para todos'}</span>
            <span className="movies__content__text__container"> {duration} Min</span>
          </div>
          {selectedGenre && !genre_ids.includes(selectedGenre) && <span className="movies__content__text__container">No se encuentra en el género seleccionado</span>}
        </div>
      </div>
    </figure>
  );
};

export default Movies;

