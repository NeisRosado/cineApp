
import React, { useState, useEffect } from 'react';
import { fetchMoviesAndGenres } from '../../services/getApi';
import Movies from '../movies/Movies';


const Main = () => {
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

  return (
    <>
      <h3 className="cardTitle">EN CARTELERA</h3>
      <div className='containerCards'>
        {movies.map((movie) => (
          <Movies key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
    </>
  );
};

export default Main;
