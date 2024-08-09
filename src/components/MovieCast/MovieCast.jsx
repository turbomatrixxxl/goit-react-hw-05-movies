import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from 'services/api';

import LoadingPage from 'pages/LoadingPage';
import Alert from 'components/common/Alert';

import styles from './MovieCast.module.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default function MovieCast() {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const [actor, setActor] = useState([]);

  // const location = useLocation();
  // console.log(location);
  // console.log(location.state.from);

  //  const navigate = useNavigate();
  const { movieId } = useParams();
  // console.log(movieId);

  // const castApi = `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/movie/${movieId}/credits?&api_key=${apiKey}&language=en-US&page=1`
        );

        const movieCast = response.data.cast;

        // console.log(movieCast);

        const actorCast = movieCast.map((actor, index) => {
          const imagePath = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;

          return (
            <li key={index} className={styles.listItem}>
              <img className={styles.img} src={imagePath} alt={actor.name} />
              <p className={styles.listItemName}>
                <b>{actor.name}</b>
              </p>
              <p className={styles.listItemCharacter}>{actor.character}</p>
            </li>
          );
        });

        setActor(actorCast);
        setCast(movieCast);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Sorry ! The movie cast can't be found !");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  //   console.log(movie);

  return (
    <main>
      {loading && <LoadingPage />}

      {error && <Alert message={error} />}

      {(cast.length > 0 || cast !== null || cast !== undefined) && (
        <ul className={styles.list}>{actor}</ul>
      )}
    </main>
  );
}

MovieCast.propTypes = {
  loading: PropTypes.bool,
  cast: PropTypes.array,
  actor: PropTypes.array,
};
