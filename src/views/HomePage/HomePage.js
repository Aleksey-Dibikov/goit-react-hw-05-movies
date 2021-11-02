import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '?api_key=5ac7dab86f0784856afa396a121529bf';

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
