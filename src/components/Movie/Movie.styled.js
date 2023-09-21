import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledMovieDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 8px;
`;
