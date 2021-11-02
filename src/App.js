import './App.css';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route>
            <MoviesPage />
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
