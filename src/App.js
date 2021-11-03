import './App.css';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Loading from './components/Loading/loading';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import NotFoundView from './views/NotFoundView';

// const Container = lazy(() => import('./components/Container/Container' /* webpackChunkName: 'Container' */));
// const Navigation = lazy(() => import('./components/Navigation/Navigation' /* webpackChunkName: 'Navigation' */));
const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: 'HomePage' */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: 'MoviesPage' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'MovieDetailsPage' */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: 'NotFoundView' */),
);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
