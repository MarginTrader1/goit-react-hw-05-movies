import { Link, NavLink, Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Homepage } from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="Movies">Movies</Link>
      </NavLink>
      <hr />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
