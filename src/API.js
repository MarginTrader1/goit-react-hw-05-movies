import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWU5YjNkNzRiOGQyMzZmM2U2ODY1MDMyMDUyMDVmZSIsInN1YiI6IjY0ZmRiODVjZmZjOWRlMGVlMjA3ZjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4-FyOtXA4AKknmpZTKWhyXu67ymaDxqt-hXUNQEJCqQ',
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const url = `${BASE_URL}trending/movie/week?language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {}
};

export const fetchMoviesByQuery = async (query, page) => {
  try {
    const url = `${BASE_URL}search/movie?query=${query}&language=en-US&page=${page}`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {}
};

export const fetchMoviesByID = async id => {
  try {
    const url = `${BASE_URL}movie/${id}`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {}
};

export const fetchMovieCast = async id => {
  try {
    const url = `${BASE_URL}movie/${id}/credits`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {}
};

export const fetchMovieReviews = async id => {
  try {
    const url = `${BASE_URL}movie/${id}/reviews`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {}
};
