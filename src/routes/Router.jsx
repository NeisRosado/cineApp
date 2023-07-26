import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import MovieDetail from '../components/movieDetail/MovieDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idMovie" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
