export const Movie = ({ movie }) => {
  const { poster_path, title, overview, vote_average, genres } = movie;
  
  /* Функция для жанров */
  function makeGenres(genres) {
    const list = genres.map(item => item.name).join(' ');
    return list;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title}`}
        loading="lazy"
      />
      <div>
        <h2>{title}</h2>
        <p><b>User score:</b> {vote_average}</p>
        <p><b>Overview:</b> {overview}</p>
        <p><b>Genres:</b> {makeGenres(genres)}</p>
      </div>
    </div>
  );
};
