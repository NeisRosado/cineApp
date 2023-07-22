import React, { useState, useEffect } from 'react';
import { fetchMoviesAndGenres } from '../../services/getApi';
import Movies from '../movies/Movies';

const Main = ({ selectedGenre, selectedCinema }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { movies, genres } = await fetchMoviesAndGenres();
      setMovies(movies);
      setGenres(genres);
    };

    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    // Filtrar por género
    if (selectedGenre && (!movie.genre_ids || !movie.genre_ids.includes(selectedGenre))) {
      return false;
    }

    // Filtrar por cine
    if (selectedCinema && (!movie.cinema_ids || !movie.cinema_ids.includes(selectedCinema))) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="cardTitle">EN CARTELERA</div>
      <div className="containerCards">
        {filteredMovies.map((movie) => (
          <Movies key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
    </>
  );
};

export default Main;
