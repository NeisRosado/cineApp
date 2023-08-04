import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoAndSynopsis } from '../../services/getVideo';
import { fetchMoviesAndGenres } from '../../services/getMovies';
import './trailer.scss';

const Trailer = () => {
    const { idMovie } = useParams();
    const [video, setVideo] = useState(null);
    const [synopsis, setSynopsis] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchVideoAndSynopsis = async () => {
            const { video, synopsis } = await getVideoAndSynopsis(idMovie);
            setVideo(video);
            setSynopsis(synopsis);
        };

        fetchVideoAndSynopsis();
    }, [idMovie]);

    useEffect(() => {
        const fetchData = async () => {
            const { movies, genres } = await fetchMoviesAndGenres();
            const movie = movies.find((movie) => movie.id === parseInt(idMovie));
            setMovieDetails(movie);
            setGenres(genres);
        };

        fetchData();
    }, [idMovie]);

    if (!video || !synopsis || !movieDetails) {
        return <div>Loading...</div>;
    }

    const getGenreButtons = () => {
        const genresToShow = movieDetails.genre_ids.slice(0, 2);
        return genresToShow.map((genreId) => (
            <button key={genreId} className="genre-button">
                {getGenreName(genreId)}
            </button>
        ));
    };

    const getGenreName = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : 'Desconocido';
    };

    return (
        <section className="trailer">
            <div className="trailer__details">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
                <div> <h3>{movieDetails.title}</h3>
                    <span>{movieDetails.original_title}</span>
                    <div> 
                        <button className="min">{movieDetails.duration} min </button>
                        {getGenreButtons()}
                    </div>
                </div>
            </div>
            <figure className="trailer__video">
                <h3>Trailer</h3>
                <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </figure>
            <div className="trailer__synopsis">
                <h2>Sinopsis</h2>
                <p>{synopsis}</p>
            </div>
        </section>
    );
};

export default Trailer;
