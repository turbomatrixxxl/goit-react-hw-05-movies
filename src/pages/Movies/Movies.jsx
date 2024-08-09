import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { apiKey } from 'services/api';
import MovieItem from 'components/common/MovieItem';
import LoadingPage from 'pages/LoadingPage';
import Alert from 'components/common/Alert';

import styles from './Movies.module.css';

export default function Movies() {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchtherm, setSearchtherm] = useState('');

  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  //   const searchUrl = 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1';

  useEffect(() => setSearchtherm(''), []);

  useEffect(() => {
    const fetchData = async () => {
      //   if (searchtherm === '') {
      //     return;
      //   }
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/search/movie?query=${searchtherm}&api_key=${apiKey}&include_adult=false&language=en-US&page=1`
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
        setError(
          'Sorry ! There are no movies with this searchtherm ! Please try again !'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchtherm]);

  function handleSubmit(ev) {
    ev.preventDefault();

    const form = ev.target;
    // console.log(form.elements.searchTherm.value);

    setSearchtherm(form.elements.searchTherm.value);

    console.log(searchtherm);

    form.reset();
  }

  return (
    <main>
      {loading && <LoadingPage />}

      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="searchTherm"
          //   value={searchtherm}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul className={styles.list}>
          <MovieItem movieList={movies} />
        </ul>
      )}
    </main>
  );
}

Movies.propTypes = {
  handleSubmit: PropTypes.func,
};
