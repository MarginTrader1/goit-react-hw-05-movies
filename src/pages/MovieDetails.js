import { fetchMoviesByID } from 'API';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  /* хук  useParams() забирает параметры запроса с url*/
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (movieId === '') return; /* запрет запроса при загрузке страницы*/

    async function getMovieItem() {
      try {
        const movie = await fetchMoviesByID(movieId);
        setData(movie);
      } catch (error) {
        console.log(error.code);
      }
    }

    getMovieItem();
  }, [movieId]);

  return (
    data /* если есть data -> рендерим разметку (поэтому первичная data=null) */ && (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="${image.tags}"
          loading="lazy"
        />

        <div>
          <h2>{data.title}</h2>
          <p>
            <b>Popularity:</b> {data.popularity}
          </p>
          <p>
            <b>overview:</b> {data.overview}
          </p>
          <p>
            <b>Genres:</b>
            {}
          </p>
          <p>
            <b>Additional information:</b>
            {}
          </p>
        </div>
      </>
    )
  );
};

export default MovieDetails;
