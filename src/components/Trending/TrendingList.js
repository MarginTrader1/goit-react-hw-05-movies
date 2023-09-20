import { TrendingItem } from 'components/TrendingItem/TrendingItem';
// import { List } from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
  
  return (
    <ul>
      {movies.map(item => (
        <TrendingItem key={item.id} title={item.title} id={item.id} />
      ))}
    </ul>
  );
};
