import axios from 'axios';
const API_KEY = "898f6e33f8a4e5d10bdc7bd6e5a8eda7";
const URL_API_MOVIE = "https://api.themoviedb.org/3/movie/now_playing";
const URL_API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";
const URL_JSON_SERVER = "http://localhost:5000/functions"; 

export const fetchMoviesAndGenres = async () => {
  try {
    const responseMovies = await axios.get(`${URL_API_MOVIE}?api_key=${API_KEY}&language=es-ES`);
    const responseGenres = await axios.get(`${URL_API_GENRES}?api_key=${API_KEY}&language=es-ES`);
    const responseFunctions = await axios.get(URL_JSON_SERVER);

    const movies = responseMovies.data.results;
    const genres = responseGenres.data.genres;

    // Verificar si responseFunctions.data es un array
    // Si no es un array, asignar un array vacío a 'functions'
    const functions = Array.isArray(responseFunctions.data) ? responseFunctions.data : [];

    // Agregar la información de cinema_ids a cada película
    movies.forEach((movie) => {
      const cinemaIds = functions
        .filter((func) => func.movie_id.includes(movie.id))
        .map((func) => func.cinema_id[0]); 
      movie.cinema_ids = cinemaIds;
    });

    return { movies, genres };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { movies: [], genres: [] };
  }
};
