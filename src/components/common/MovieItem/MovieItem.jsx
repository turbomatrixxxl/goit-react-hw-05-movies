import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './MovieItem.module.css';

export default function MovieItem({ movieList }) {
  // const location = useLocation();
  // console.log(location);

  return movieList.map(movie => {
    // console.log(movie);

    return (
      <li key={movie.id}>
        <Link
          className={styles.link}
          to={`${movie.id}`}
          // state={{ from: location }}
        >
          {movie.title}
        </Link>
      </li>
    );
  });
}

MovieItem.propTypes = {
  movieList: PropTypes.array,
};
