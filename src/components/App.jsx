import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Homepage } from 'pages/HomePage';
import { TrendingList } from './Trending/Trending';

// импорт запроса
import { fetchTrendingMovies } from 'API';

export const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

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
    async function getVideos() {
      // уникальный запрос (строку) обрезаем до стандартного слова
      const query = searchQuery.slice(14);

      // запрос на сервер и сразу деструктуризируем объект
      const { results } = await fetchTrendingMovies(query, page);
      setData(results);
    }
    // вызываем ассинхронную функцию getVideos (необходимый паттерн для иссинхронных функций в useEffect)
    getVideos();
  }, [searchQuery]);

  // запрос за следующей страничкой для кнопки loadMore
  const newPage = () => setPage(prevState => prevState + 1);

  return (
    <>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="Movies">Movies</Link>
      </NavLink>
      <hr />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
