import { fetchMovieReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId === '') return; /* запрет запроса при загрузке страницы*/

    async function getMovieReview() {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {}
    }

    getMovieReview();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <List>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id} author={author} content={content} />
      ))}
    </List>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
