// import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../service/api';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [films, setFilms] = useState([]);
  const [findFilm, setFindFilm] = useState('');

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryUrl = new URLSearchParams(location.search).get('query');

    if (!findFilm && !queryUrl) {
      return;
    }

    if (!inputValue && queryUrl) {
      axios
        .get(
          `${BASE_URL}search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${findFilm}`,
        )
        .then(resp => setFilms(resp.data.results))
        .then(
          history.push({
            ...location,
            search: `query=${queryUrl}`,
          }),
        )
        .catch(error => console.log(error));
    } else
      axios
        .get(
          `${BASE_URL}search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${findFilm}`,
        )
        .then(res => setFilms(res.data.results))
        .then(
          history.push({
            ...location,
            search: `query=${findFilm}`,
          }),
        )
        .catch(err => console.warn(err));
  }, [findFilm]);

  const handleSubmit = e => {
    e.preventDefault();

    setFindFilm(inputValue);
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <header className={s.MoviesPage}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            {/* <span className={s.SearchFormButtonLabel}>Search</span> */}
            Search
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={inputValue}
            onChange={onChange}
          />
        </form>
      </header>
      {films.length > 0 && (
        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link
                  to={{
                    pathname: `/movies/${film.id}`,

                    state: {
                      from:
                        `${history.location.pathname}` +
                        `${history.location.search}`,
                      label: 'Back to movies from moviePage',
                    },
                  }}
                >
                  {film.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
