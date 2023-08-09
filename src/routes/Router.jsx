import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import MovieDetail from '../components/movieDetail/MovieDetail';
import Tickets from '../components/tickets/Tickets'; 
import SeatSelection from '../components/seatSelection/SeatSelection';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idMovie" element={<MovieDetail />} />
        <Route path="/tickets/:idShowtime" element={<Tickets />} /> 
        <Route path="/seat-selection" element={<SeatSelection />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
