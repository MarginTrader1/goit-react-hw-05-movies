import { StyledDiv } from './CastItem.styled';

export const CastItem = ({ id, character, name, profile_path }) => {
  return (
    /* если есть фото, т.е. profile_path !== null --> рендерим разметку */
    profile_path && (
      <li>
        <img
          width={200}
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={`${name}`}
          loading="lazy"
        />
        <StyledDiv>
          <p>
            <b>{name}</b>
          </p>
          <p>
            <b>Character:</b> {character}
          </p>
        </StyledDiv>
      </li>
    )
  );
};
