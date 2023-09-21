import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import { StyledNav } from 'components/App.styled';

export const Layout = () => {
  return (
    <Container>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Movies">Movies</NavLink>
      </StyledNav>
      <hr />
      <Outlet />
    </Container>
  );
};
