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

    const moviePromises = movies.map(async (movie) => {
      const cinemaIds = functions
        .filter((func) => func.movie_id.includes(movie.id))
        .map((func) => func.cinema_id[0]);
      movie.cinema_ids = cinemaIds;

      try {
        const movieDetailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`);
        const duration = movieDetailsResponse.data.runtime;
        movie.duration = duration;
      } catch (error) {
        console.error('Error obteniendo los detalles de la película:', error);
        movie.duration = 0;
      }
    });

    await Promise.all(moviePromises);

    // Datos del json-server para los detalles de funciones
    const functionsWithDetails = functions.map((func) => {
      const showtimes = func.showtimes ? func.showtimes.map((showtime) => ({
        start_date: showtime.start_date,
        end_date: showtime.end_date,
        time: showtime.time,
        ticketsSold: showtime.tickets_sold,
        totalTickets: showtime.total_tickets,
        availableTickets: showtime.available_tickets,
        seats: Array.from({ length: showtime.total_tickets }, (_, index) => ({
          id: index + 1,
          isOccupied: index < showtime.tickets_sold,
        })),
      })) : [];

      return {
        ...func,
        showtimes,
      };
    });

    return { movies, genres };
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return { movies: [], genres: [], functionsWithDetails: [] };
  }
};

const getVideoMovie = async (idMovie) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${API_KEY}&language=es-ES`;

    const { data } = await axios.get(url);
    const video = data.results.find((item) =>
      item.type.toLowerCase().includes("trailer")
    );
    return video;

  } catch (error) {
    console.log(error);
    return null;
  }

}

export const getVideoAndSynopsis = async (idMovie) => {
  try {
    const video = await getVideoMovie(idMovie);
    const movieDetailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=es-ES`);
    const synopsis = movieDetailsResponse.data.overview;
    return { video, synopsis };
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return { video: null, synopsis: null };
  }
};