import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { List } from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
<<<<<<< Updated upstream:src/components/Trending/TrendingList.js
  
  console.log(`Это консоль в TrendingList ${movies}`);

=======
  console.log(movies);

  const [trendMovies] = movies;
  const trendId = trendMovies.id
  
>>>>>>> Stashed changes:src/components/Trending/Trending.js
  return (
    <List>
      {movies.map(item => (
        <TrendingItem key={item.id} title={item.title} id={item.id} />
      ))}
    </List>
  );
};
