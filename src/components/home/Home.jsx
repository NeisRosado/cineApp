import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.scss';
import Main from '../main/Main';
import { DateContext } from '../calendar/Calendar'; 

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleCinemaClick = (cinema) => {
    setSelectedCinema(cinema);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DateContext.Provider value={{ selectedDate, handleDateChange }}>
      <>
        <Header
          onGenreClick={handleGenreClick}
          onCinemaClick={handleCinemaClick}
        />
        <Main
          selectedGenre={selectedGenre}
          selectedCinema={selectedCinema}
        />
        <Footer />
      </>
    </DateContext.Provider>
  );
};

export default Home;
