import React, { useState, useEffect } from 'react';
import { fetchMoviesAndGenres } from '../../services/getApi';
import MovieCard from '../movieCard/MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../movieCard/movieCard.scss';
import './headerCards.scss'

const HeaderCards = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCards;