import React from 'react';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import SeriesMovie from './pages/SeriesMovie';
import { Routes, Route } from 'react-router-dom';
import NewFilms from './pages/NewFilms';
import OddFilms from './pages/OddFilms';
import DemoFilms from './pages/DemoFilms';
import MovieFilms from './pages/MoviesFilms';
import TvShow from './pages/TvShow';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seriesmovie" element={<SeriesMovie />} />
        <Route path="/newfilms" element={<NewFilms />} />
        <Route path="/oddfilms" element={<OddFilms />} />
        <Route path="/demofilms" element={<DemoFilms />} />
        <Route path="/moviefilms" element={<MovieFilms />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
