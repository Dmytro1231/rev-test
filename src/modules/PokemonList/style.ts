import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 44px;

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  width: 100px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 12px;
`;