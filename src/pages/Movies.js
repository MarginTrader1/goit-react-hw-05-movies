import { useEffect, useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { TrendingList } from 'components/Trending/TrendingList';

// импорт запроса
import { fetchMoviesByQuery } from 'API';

export const Movies = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page /*setPage*/] = useState(1);

  // получаем велью инпута, которое записываем в state
  const getQuery = newQuery => {
    // проверка на пустой запрос
    if (newQuery === '') {
      return alert(`Пустая строка! Введите слово для поиска!`);
    }
    // делаем запрос уникальным по методу ниже и записываем его в state
    setSearchQuery(`${Date.now()}/${newQuery}`.trim());
  };

  // основной запрос на сервер делаем через useEffect
  useEffect(() => {
    //запрет запроса при загрузке страницы
    if (searchQuery === '') return;

    //создаем ассинхронную функцию getImages (необходимый паттерн для иссинхронных функций в useEffect)
    async function getMovies() {
      // уникальный запрос (строку) обрезаем до стандартного слова
      const query = searchQuery.slice(14);

      // запрос на сервер и сразу деструктуризируем объект
      const { results } = await fetchMoviesByQuery(query, page);
      setData(results);
    }
    // вызываем ассинхронную функцию getMovies (необходимый паттерн для иссинхронных функций в useEffect)
    getMovies();
  }, [searchQuery, page]);

  return (
    <>
      <Searchbar getQuery={getQuery} />
      <TrendingList movies={data} />
    </>
  );
};

export default Movies;
