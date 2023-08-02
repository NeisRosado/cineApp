import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.scss';
import Main from '../main/Main';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleCinemaClick = (cinema) => {
    setSelectedCinema(cinema);
  };

  return (
    <>
      <Header onGenreClick={handleGenreClick} onCinemaClick={handleCinemaClick} />
      <Main selectedGenre={selectedGenre} selectedCinema={selectedCinema} />
      <Footer />
    </>
  );
};

export default Home;
