import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../movieCard/movieCard.scss'


const HeaderCards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
        const API_KEY = "898f6e33f8a4e5d10bdc7bd6e5a8eda7";
        const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`
        const response = await axios.get(URL_CONSULTA);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  </div>
);
};

export default HeaderCards;