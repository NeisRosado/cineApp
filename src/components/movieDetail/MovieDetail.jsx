import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { getVideoAndSynopsis } from '../../services/getVideo';
import Trailer from '../trailer/Trailer';
import Footer from '../footer/Footer';
import MovieFunctions from '../movieFunctions/MovieFunctions';
import { getFunctionsWithDetails } from '../../services/getFunctions';

const MovieDetail = () => {
  const { idMovie } = useParams();
  const [videoAndSynopsis, setVideoAndSynopsis] = useState(null);
  const [functionsWithDetails, setFunctionsWithDetails] = useState([]);

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

  if (!videoAndSynopsis) {
    return <div> Cargando...</div>;
  }

  const { video, synopsis } = videoAndSynopsis;


  const filteredFunctions = functionsWithDetails.filter((func) =>
    func.movie_id.includes(parseInt(idMovie))
  );

  return (
    <>
      <Header />
      <Trailer video={video} />
      <MovieFunctions functionsWithDetails={filteredFunctions} />
      <Footer />
    </>
  );
};

export default MovieDetail;

