import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./home.scss";
import Main from '../main/Main';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <Header onGenreClick={handleGenreClick} />
      <Main selectedGenre={selectedGenre} />
      <Footer />
    </>
  );
};

export default Home;
