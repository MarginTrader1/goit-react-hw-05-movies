import { fetchTrendingMovies } from 'API';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

const Homepage = () => {
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
      {data.length !== 0 ? (
        <>
          <h2>Trending Movies</h2>
          <TrendingList movies={data} />
        </>
      ) : (
        <div>We didn't find videos</div>
      )}
    </>
  );
};

export default Homepage;
