export const CastItem = ({ id, character, name, profile_path }) => {
  return (
    /* если есть фото, т.е. profile_path !== null --> рендерим разметку */
    profile_path && (
      <li>
        <img
          width={100}
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={`${name}`}
          loading="lazy"
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    )
  );
};
