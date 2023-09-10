import { Link } from 'react-router-dom';

export const TrendingItem = ({ title, id }) => {
  return (
    <Link to={`${id}`}>
      <li>
        <p>{title}</p>
      </li>
    </Link>
  );
};
