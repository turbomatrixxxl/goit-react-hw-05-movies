import Header from 'components/Header';
import LoadingPage from 'pages/LoadingPage';
import NotFoundPage from 'pages/NotFoundPage';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyHome = lazy(() => import('pages/Home'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails'));
const LazyMovieCast = lazy(() => import('components/MovieCast'));
const LazyMovieReviews = lazy(() => import('components/MovieReviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="goit-react-hw-05-movies/" element={<LazyHome />} />

          <Route path="goit-react-hw-05-movies/home" element={<LazyHome />} />
          <Route
            path="goit-react-hw-05-movies/:movieId"
            element={<LazyMovieDetails />}
          >
            <Route path="cast" element={<LazyMovieCast />} />
            <Route path="reviews" element={<LazyMovieReviews />} />
          </Route>

          <Route
            path="goit-react-hw-05-movies/movies"
            element={<LazyMovies />}
          />
          <Route
            path="goit-react-hw-05-movies/movies/:movieId"
            element={<LazyMovieDetails />}
          >
            <Route path="cast" element={<LazyMovieCast />} />
            <Route path="reviews" element={<LazyMovieReviews />} />
          </Route>

          <Route
            path="*"
            element={<NotFoundPage initPage="goit-react-hw-05-movies" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
