import { fetchMovieReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReview() {
      try {
        const { results } = await fetchMovieReviews(movieId);
        console.log(results);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieReview();
  }, []);

  console.log(reviews);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(item => (
        <ReviewItem key={item.id} author={item.author} content={item.content} />
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};
