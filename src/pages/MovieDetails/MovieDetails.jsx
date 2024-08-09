import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { HiBackward } from 'react-icons/hi2';

import { apiKey } from 'services/api';
import axios from 'axios';
import LoadingPage from 'pages/LoadingPage';
import Alert from 'components/common/Alert';

import styles from './MovieDetails.module.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default function MovieDetails() {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');

  //   const location = useLocation();
  //   console.log(location);
  //   console.log(location.state.from);

  const navigate = useNavigate();
  const { movieId } = useParams();

  // const urlApi = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/movie/${movieId}?&api_key=${apiKey}&language=en-US&page=1`
        );

        const movieDetails = response.data;

        // console.log(movieDetails);

        const movieGenres = movieDetails.genres.map(genre => {
          return (
            <li key={genre.id} className={styles.genresListItem}>
              {genre.name}
            </li>
          );
        });

        const date = new Date(movieDetails.release_date).getFullYear();

        setDate(date);
        setGenre(movieGenres);
        setMovie(movieDetails);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Sorry ! The movies can't be found !");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  //   console.log(movie);

  const imagePath = `http://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  //   console.log(genre);

  //   console.log(date);

  function handleBack() {
    navigate(-1);
  }

  return (
    <main>
      {loading && <LoadingPage />}

      {error && <Alert message={error} />}

      {(movie.length > 0 || movie !== null || movie !== undefined) && (
        <>
          {' '}
          <div className={styles.mainMovieContainer}>
            <div className={styles.mainMovieLeftContainer}>
              <button
                className={styles.backButton}
                onClick={handleBack}
                type="button"
              >
                <span>
                  <HiBackward />
                </span>
                Go back
              </button>

              <img
                className={styles.movieImage}
                src={imagePath}
                alt="Movie Poster"
              />
            </div>
            <div className={styles.mainMovieRightContainer}>
              <h3 className={styles.movieTitle}>
                {movie.title}({date})
              </h3>
              <p className={styles.movieScore}>
                User score {Math.trunc(movie.vote_average * 10)}%
              </p>
              <h4 className={styles.movieTitleOverwiew}>Overwiew</h4>
              <p className={styles.overwiewDescription}>{movie.overview}</p>
              <p className={styles.movieTitleGenres}>
                <b>Genres</b>
              </p>
              <ul className={styles.genresList}>{genre}</ul>
            </div>
          </div>
          <div className={styles.movieLinksContainer}>
            <p className={styles.linksTitle}>Additional information</p>
            <ul>
              <li>
                <Link
                  className={styles.link}
                  to="cast"
                  //   state={{ from: location.state }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to="reviews"
                  //   state={{ from: location.state }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </main>
  );
}

MovieDetails.propTypes = {
  loading: PropTypes.bool,
  movie: PropTypes.array,
  genre: PropTypes.string,
  date: PropTypes.string,
  handleBack: PropTypes.func,
};
