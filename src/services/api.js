// services/api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const apiKey = '90080ff184cabebdf1b42eaa88fb5738';

export const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

export const fetchMoviesWithQuery = searchQuery => {
  const response = axios.get(
    `/${searchQuery}?&api_key=${apiKey}&language=en-US`
  );
  console.log(response.data.results);
  console.log(fetchMoviesWithQuery);

  return response.data.results;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchMoviesWithQuery,
};
