import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMoviesAndGenres } from '../../services/getApi';
import Movies from '../movies/Movies';

const Main = ({ selectedGenre, selectedCinema }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { movies, genres } = await fetchMoviesAndGenres();
        setMovies(movies);
        setGenres(genres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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

  const handleMovieClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };

  return (
    <>
      <div className="cardTitle">EN CARTELERA</div>
      <div className="containerCards">
        {filteredMovies.map((movie) => (
          <Movies key={movie.id} movie={movie} genres={genres} selectedGenre={selectedGenre} onClick={() => handleMovieClick(movie.id)} />
        ))}
      </div>
    </>
  );
};

export default Main;