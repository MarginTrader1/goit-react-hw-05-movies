import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

export const TrendingItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      {/* передаем локацию странички через пропс 'state' компонента Link */}
      <Link to={`/Movies/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
