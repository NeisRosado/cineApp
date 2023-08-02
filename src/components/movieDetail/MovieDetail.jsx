import React from 'react'
import Header from '../header/Header'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoAndSynopsis } from '../../services/getApi';
import Trailer from '../trailer/Trailer';
import Footer from '../footer/Footer';

const MovieDetail = () => {
    const { idMovie } = useParams();
    const [videoAndSynopsis, setVideoAndSynopsis] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            const data = await getVideoAndSynopsis(idMovie);
            setVideoAndSynopsis(data);
        };

        fetchMovieData();
    }, [idMovie]);

    if (!videoAndSynopsis) {
        return <div> Cargando...</div>;
    }

    return (
        <>
            <Header />
            <Trailer />
            <Footer/>

        </>
    )
}

export default MovieDetail;

