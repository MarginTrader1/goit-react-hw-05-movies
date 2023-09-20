export const ReviewItem = ({ id, author, content }) => {
  return (
    <li key={id}>
      <h4>{`author: ${author}`}</h4>
      <p>{content}</p>
    </li>
  );
};
