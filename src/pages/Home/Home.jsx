import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';
import MovieItem from 'components/common/MovieItem';
import axios from 'axios';
import LoadingPage from 'pages/LoadingPage';
import Alert from 'components/common/Alert';
import { apiKey } from '../../services/api';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default function Home() {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/trending/movie/day?&api_key=${apiKey}&language=en-US`
        );
        // console.log(response.data);
        const moviesList = response.data.results;

        // const moviesList = await api.fetchMoviesWithQuery(`trending/movie/day`);

        // console.log(moviesList);

        // localStorage.setItem('moviesList', JSON.stringify(moviesList));

        setMovies(moviesList);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Sorry ! The movies can't be found !");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  //   console.log(movies);

  return (
    <main className="main">
      {loading && <LoadingPage />}

      {error && <Alert message={error} />}

      <h1 className={styles.title}>Trending today</h1>
      {movies.length > 0 && (
        <ul className={styles.list}>
          <MovieItem movieList={movies} />
        </ul>
      )}
    </main>
  );
}
