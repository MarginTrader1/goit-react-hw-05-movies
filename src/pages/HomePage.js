import { fetchTrendingMovies } from 'API';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/Trending/Trending';

export const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results: trendingMovies } = await fetchTrendingMovies();
      setData(trendingMovies);
      
    };

    getTrendingMovies();
  }, [data]);

  return (
    <>
      <>
        <TrendingList movies={data} />
      </>
    </>
  );
};

export default Homepage;
