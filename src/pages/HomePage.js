import { fetchTrendingMovies } from 'API';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/Trending/TrendingList';

export const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results } = await fetchTrendingMovies();
      console.log(results);
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
