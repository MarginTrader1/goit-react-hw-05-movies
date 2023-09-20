export const CastItem = ({ id, character, name, profile_path }) => {
  return (
    <li key={id}>
      <img
        width={100}
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={`${name}`}
        loading="lazy"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
