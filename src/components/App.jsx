import { Link, Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Homepage } from 'pages/HomePage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { StyledNav } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [color1, setColor1] = useState('#3f51b5');
  const [color2, setColor2] = useState('#3f51b5');

  /* функция изменения цвета кнопок */
  const changeColor = value => {
    const clickFunction = {
      Home: () => {
        setColor1('#fa0808');
        setColor2('#3f51b5');
      },
      Movies: () => {
        setColor2('#fa0808');
        setColor1('#3f51b5');
      },
    };
    clickFunction[value]();
  };

  return (
    <>
      {/* префикс $ перед props - символ транзитного пропа */}
      <StyledNav $color1={color1} $color2={color2}>
        <Link to="/" onClick={evt => changeColor(evt.target.textContent)}>
          Home
        </Link>
        <Link to="Movies" onClick={evt => changeColor(evt.target.textContent)}>
          Movies
        </Link>
      </StyledNav>
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
