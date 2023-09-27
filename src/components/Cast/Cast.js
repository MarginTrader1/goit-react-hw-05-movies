import { fetchMovieCast } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from 'components/CastItem/CastItem';
import { nanoid } from 'nanoid';
import { List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (movieId === '') return; /* запрет запроса при загрузке страницы*/

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
      <List>
        {cast.map(item => (
          <CastItem
            key={nanoid()}
            character={item.character}
            name={item.name}
            profile_path={item.profile_path}
          />
        ))}
      </List>
    )
  );
};

export default Cast;
