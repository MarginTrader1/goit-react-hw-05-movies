export const ReviewItem = ({ id, author, content }) => {
  return (
    <li>
      <h4>{`Author: ${author}`}</h4>
      <p>{content}</p>
    </li>
  );
};
