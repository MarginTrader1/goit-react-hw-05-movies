import { fetchMovieCast } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const { cast } = await fetchMovieCast(movieId);
        console.log(cast);
        setData(cast);
      } catch (error) {
        console.log(error.code);
      }
    }

    getMovieCast();
  }, [movieId]);

  return (
    data && (
      <>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={`${data.tags}`}
            loading="lazy"
          />
          <p>Name: {}</p>
          <p>Character: {}</p>
        </div>
      </>
    )
  );
};
