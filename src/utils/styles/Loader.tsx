import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #e4e4ed;
  border-right-color: black;
  animation: ${spinAnimation} 1s infinite linear;
`;

export const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;

  height: 100vh;
`;