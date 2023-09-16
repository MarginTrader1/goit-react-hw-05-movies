import { Link } from 'react-router-dom';

export const TrendingItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
