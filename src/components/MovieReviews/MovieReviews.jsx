import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiKey } from 'services/api';
import LoadingPage from 'pages/LoadingPage';
import Alert from 'components/common/Alert';

import styles from './MovieRewiews.module.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default function MovieReviews() {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState([]);

  // const location = useLocation();
  // console.log(location);
  // console.log(location.state.from);

  //  const navigate = useNavigate();
  const { movieId } = useParams();

  // const castApi = `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/movie/${movieId}/reviews?&api_key=${apiKey}&language=en-US&page=1`
        );

        const movieReviews = response.data.results;

        // console.log(movieReviews);

        const authorReview = movieReviews.map((author, index) => {
          return (
            <li key={index} className={styles.listItem}>
              <h3 className={styles.listItemName}>{author.author}</h3>
              <p className={styles.listItemCharacter}>{author.content}</p>
            </li>
          );
        });

        setAuthor(authorReview);
        setReviews(movieReviews);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Sorry ! The movie reviews can't be found !");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  //   console.log(movie);

  // const imagePath = `http://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <main>
      {loading && <LoadingPage />}

      {error && <Alert message={error} />}

      {(reviews.length === 0 || reviews === null || reviews === undefined) && (
        <p style={{ color: 'red' }}>
          Sorry, there are no reviews yet for this movie !
        </p>
      )}

      {(reviews.length > 0 || reviews !== null || reviews !== undefined) && (
        <ul className={styles.list}>{author}</ul>
      )}
    </main>
  );
}

MovieReviews.propTypes = {
  loading: PropTypes.bool,
  reviews: PropTypes.array,
  author: PropTypes.array,
};
