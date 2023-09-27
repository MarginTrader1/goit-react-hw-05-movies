import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import { StyledNav } from 'components/App.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Movies">Movies</NavLink>
      </StyledNav>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
