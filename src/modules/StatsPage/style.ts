import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: flex;
  
  margin: 24px;

  @media (max-width: 320px) {
    display: block;
  }
`

export const ImageWrapper = styled.div`
  width: 256px;
  flex-shrink: 0;
`

export const Image = styled.img`
  width: 100%;
`
export const PokemonStatsWrapper = styled.div`
  padding: 16px; 

  width: 232px;
`
export const PokemonName = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 16px;
`

export const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 4px;

  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
`