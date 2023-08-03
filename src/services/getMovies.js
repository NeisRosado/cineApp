import axios from 'axios';
import { getFunctionsWithDetails } from './getFunctions';
const API_KEY = "898f6e33f8a4e5d10bdc7bd6e5a8eda7";
const URL_API_MOVIE = "https://api.themoviedb.org/3/movie/now_playing";
const URL_API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";
const URL_VIDEO = "https://api.themoviedb.org/3/movie/"

export const fetchMoviesAndGenres = async () => {
  try {
    const responseMovies = await axios.get(`${URL_API_MOVIE}?api_key=${API_KEY}&language=es-ES`);
    const responseGenres = await axios.get(`${URL_API_GENRES}?api_key=${API_KEY}&language=es-ES`);
    const movies = responseMovies.data.results;
    const genres = responseGenres.data.genres;
    const functions = await getFunctionsWithDetails();


    const moviePromises = movies.map(async (movie) => {
      const cinemaIds = functions
        .filter((func) => func.movie_id.includes(movie.id))
        .map((func) => func.cinema_id[0]);
      movie.cinema_ids = cinemaIds;

      try {
        const movieDetailsResponse = await axios.get(`${URL_VIDEO}${movie.id}?api_key=${API_KEY}&language=es-ES`);
        const duration = movieDetailsResponse.data.runtime;
        movie.duration = duration;
      } catch (error) {
        console.error('Error obteniendo los detalles de la película:', error);
        movie.duration = 0;
      }
    });

    await Promise.all(moviePromises);

    return { movies, genres };
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return { movies: [], genres: [] };
  }
};
