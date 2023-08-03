import axios from 'axios';
const API_KEY = "898f6e33f8a4e5d10bdc7bd6e5a8eda7";
const URL_VIDEO = "https://api.themoviedb.org/3/movie/"

export const getVideoAndSynopsis = async (idMovie) => {
  try {
    const videoUrl = `${URL_VIDEO}${idMovie}/videos?api_key=${API_KEY}&language=es-ES`;
    const movieDetailsUrl = `${URL_VIDEO}${idMovie}?api_key=${API_KEY}&language=es-ES`;

    const [videoResponse, movieDetailsResponse] = await Promise.all([
      axios.get(videoUrl),
      axios.get(movieDetailsUrl),
    ]);

    const video = videoResponse.data.results.find((item) =>
      item.type.toLowerCase().includes("trailer")
    );

    const synopsis = movieDetailsResponse.data.overview;

    return { video, synopsis };
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return { video: null, synopsis: null };
  }
};

