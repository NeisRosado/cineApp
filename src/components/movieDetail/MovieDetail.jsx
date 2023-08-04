import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoAndSynopsis } from '../../services/getVideo';
import Trailer from '../trailer/Trailer';
import Footer from '../footer/Footer';
import MovieFunctions from '../movieFunctions/MovieFunctions';
import { getFunctionsWithDetails } from '../../services/getFunctions';
import './movieDetails.scss';


const MovieDetail = () => {
  const { idMovie } = useParams();
  const [videoAndSynopsis, setVideoAndSynopsis] = useState(null);
  const [functionsWithDetails, setFunctionsWithDetails] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await getVideoAndSynopsis(idMovie);
      setVideoAndSynopsis(data);
    };

    const fetchData = async () => {
      try {
        const functions = await getFunctionsWithDetails();
        setFunctionsWithDetails(functions);
      } catch (error) {
        console.error('Error al obtener los detalles de las funciones:', error);
      }
    };

    fetchMovieData();
    fetchData();
  }, [idMovie]);

  const handleSelectTickets = () => {
    // Navegar a la página de Tickets
    navigate(`/tickets/${idMovie}`);
  };

  if (!videoAndSynopsis) {
    return <div> Cargando...</div>;
  }

  const { video, synopsis } = videoAndSynopsis;

  // Filtrar las funciones solo para la película seleccionada
  const filteredFunctions = functionsWithDetails.filter((func) =>
    func.movie_id.includes(parseInt(idMovie))
  );

  return (
    <>
      <Header />
      <div className='section'>
      <Trailer video={video} />
      <MovieFunctions functionsWithDetails={filteredFunctions} onSelectTickets={handleSelectTickets} />
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;

