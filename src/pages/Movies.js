import { useEffect, useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { useSearchParams } from 'react-router-dom';

// импорт запроса
import { fetchMoviesByQuery } from 'API';

const Movies = () => {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  // основной запрос на сервер делаем через useEffect
  useEffect(() => {
    //запрет запроса при загрузке страницы
    if (movieName === '') return;

    //создаем ассинхронную функцию getImages (необходимый паттерн для иссинхронных функций в useEffect)
    async function getMovies() {
      // запрос на сервер и сразу деструктуризируем объект
      const { results } = await fetchMoviesByQuery(movieName, page);
      setData(results);
    }
    // вызываем ассинхронную функцию getMovies (необходимый паттерн для ассинхронных функций в useEffect)
    getMovies();
  }, [page, movieName]);

  console.log(data);
  console.log(searchParams.size);

  return (
    <>
      <Searchbar onChange={updateQueryString} value={movieName} />
      {data.length === 0 && searchParams.size > 0 ? (
        <>
          <div>We didn't find videos!</div>
        </>
      ) : (
        <TrendingList movies={data} />
      )}
    </>
  );
};

export default Movies;
