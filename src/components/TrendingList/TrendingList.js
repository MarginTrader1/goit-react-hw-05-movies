import { TrendingItem } from 'components/TrendingItem/TrendingItem';
// import { List } from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <TrendingItem key={id} title={title} id={id} />
      ))}
    </ul>
  );
};
