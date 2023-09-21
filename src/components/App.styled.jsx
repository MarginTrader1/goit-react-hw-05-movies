import styled from 'styled-components';

export const StyledNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  > a {
    min-width: 150px;
    padding: 8px 16px;
    text-align: center;
    display: inline-block;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;

    &:first-child {
      background-color: ${props => props.$color1};
    }
    &:last-child {
      background-color: ${props => props.$color2};
    }
  }
`;
