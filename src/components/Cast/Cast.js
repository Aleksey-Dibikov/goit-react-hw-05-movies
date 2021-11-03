import axios from 'axios';
import { useEffect, useState } from 'react';

import { API_KEY, BASE_URL } from '../../service/api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${movieId}/credits${API_KEY}&language=en-US`)
      .then(resp => setCast(resp.data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt=""
              width="250"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
