import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../../service/api';
import s from './MovieDetailsPage.module.css';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${movieId}${API_KEY}&language=en-US`)
      .then(resp => setMovie(resp.data))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <button type="button" className={s.btn}>
        <NavLink to="/" exact>
          Go back
        </NavLink>
      </button>
      {movie && (
        <>
          <div className={s.card}>
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </div>
            <div className={s.discription}>
              <h2>
                {movie.title} ({movie.release_date})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className="">
                {movie.genres.map(genre => {
                  return (
                    <li className="" key={genre.id}>
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>

          <Route path="/movies/:movieId/cast">
            <Cast movieId={movieId} />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}
