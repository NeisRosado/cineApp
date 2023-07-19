import axios from 'axios';

const API_KEY = "898f6e33f8a4e5d10bdc7bd6e5a8eda7";

export const fetchMoviesAndGenres = async () => {
  try {
    const URL_API_MOVIE = "https://api.themoviedb.org/3/movie/now_playing";
    const URL_MOVIE = `${URL_API_MOVIE}?api_key=${API_KEY}&language=es-ES`;
    const response = await axios.get(URL_MOVIE);
    const movies = response.data.results;

    const URL_API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";
    const URL_GENRES = `${URL_API_GENRES}?api_key=${API_KEY}&language=es-ES`;
    const genresResponse = await axios.get(URL_GENRES);
    const genres = genresResponse.data.genres;

    return { movies, genres };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { movies: [], genres: [] }; 
  }
};
