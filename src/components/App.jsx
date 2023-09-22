import { Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Homepage } from 'pages/HomePage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route index element={<Homepage />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Movies/:movieId" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
};
