import axios from 'axios';

// const key = 'a9e9b3d74b8d236f3e686503205205fe';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWU5YjNkNzRiOGQyMzZmM2U2ODY1MDMyMDUyMDVmZSIsInN1YiI6IjY0ZmRiODVjZmZjOWRlMGVlMjA3ZjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4-FyOtXA4AKknmpZTKWhyXu67ymaDxqt-hXUNQEJCqQ',
  },
};

export const fetchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesByQuery = async (searchQuery, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesByID = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMovieCast = async (id, credits) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMovieReviews = async (id, credits) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const response = await axios.get(url, options);

  return response.data;
};