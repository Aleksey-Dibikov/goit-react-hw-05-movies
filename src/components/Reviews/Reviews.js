import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../service/api';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`,
      )
      .then(resp => setReviews(resp.data.results))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <ul>
      {reviews.length
        ? reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        : 'We don`t have any reviews for this movie'}
    </ul>
  );
}
