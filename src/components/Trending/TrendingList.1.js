import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { List } from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
  console.log(`Это консоль в TrendingList ${movies}`);

  return (
    <List>
      {movies.map(item => (
        <TrendingItem key={item.id} title={item.title} id={item.id} />
      ))}
    </List>
  );
};
