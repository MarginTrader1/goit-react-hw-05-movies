import { fetchMoviesByID } from 'API';
import { useState, useEffect } from 'react';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Movie } from 'components/Movie/Movie';

import { StyledMovieDiv } from 'components/Movie/Movie.styled';

export const MovieDetails = () => {
  /* хук  useParams() забирает параметры запроса с url*/
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  const location = useLocation(); 
  /* в переменной Location принимаем пропс state и консолим pathname - путь, откуда пришли*/

  console.log(location.state.from.pathname);

  useEffect(() => {
    if (movieId === '') return; /* запрет запроса при загрузке страницы*/

    async function getMovieItem() {
      try {
        const movie = await fetchMoviesByID(movieId);
        setData(movie);
      } catch (error) {}
    }

    getMovieItem();
  }, [movieId]);

  return (
    data /* если есть data -> рендерим разметку (поэтому первичная data=null) */ && (
      <>
        <Link to={`${location.state.from.pathname}`}>Go Back</Link>
        <Movie movie={data} />
        <StyledMovieDiv>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="Cast">Cast</Link>
            </li>
            <li>
              <Link to="Reviews">Reviews</Link>
            </li>
          </ul>
        </StyledMovieDiv>
        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
