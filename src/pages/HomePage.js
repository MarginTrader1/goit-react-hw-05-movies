import { fetchTrendingMovies } from 'API';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results } = await fetchTrendingMovies();

      setData(results);
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <TrendingList movies={data} />
    </>
  );
};

export default Homepage;
