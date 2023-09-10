import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { List } from './Trending.styled';

export const TrendingList = ({ movies }) => {
  return (
    <List>
      {movies.map(item => (
        <TrendingItem key={item.id} title={item.title} />
      ))}
    </List>
  );
};
