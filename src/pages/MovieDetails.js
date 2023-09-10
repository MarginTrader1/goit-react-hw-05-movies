import { fetchMoviesByID } from 'API';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState('');

  useEffect(() => {
    //запрет запроса при загрузке страницы
    if (movieId === '') return;

    async function getMovieItem() {
      const movie = await fetchMoviesByID(movieId);

      setData(movie);
    }
    getMovieItem();
  }, [movieId]);

  console.log(data);

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="${image.tags}" loading="lazy" />

      <div>
        <h2>{data.title}</h2>
        <p><b>Popularity:</b> {data.popularity}</p>
        <p><b>overview:</b> {data.overview}</p>
        <p><b>Genres:</b>{}</p>
        <p><b>Additional information:</b>{}</p>
      </div>
    </>
  );
};
