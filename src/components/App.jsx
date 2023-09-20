import { Link, Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Homepage } from 'pages/HomePage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="Movies">Movies</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
