import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../../service/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/movie/day${API_KEY}`)
      .then(resp => setMovies(resp.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1 className="">Trending today</h1>
      <ul className="">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: '/',
                  label: 'Back to Home',
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
