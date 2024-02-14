import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface Props {
  pokemonName: string;
}

export const Breadcrumbs: FC<Props> = ({ pokemonName }) => {
  return (
    <Container>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Link>

      <p>/</p>

      <p>
        {pokemonName}
      </p>
    </Container>
  );
};