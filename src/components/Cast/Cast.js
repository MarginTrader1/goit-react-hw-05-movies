import { fetchMovieCast } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from 'components/CastItem/CastItem';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {}
    }

    getMovieCast();
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map(item => (
          <CastItem
            key={item.id}
            character={item.character}
            name={item.name}
            profile_path={item.profile_path}
          />
        ))}
      </ul>
    )
  );
};
