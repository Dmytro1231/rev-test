import { PokemonList } from "../PokemonList/PokemonList"
import { PageWrapper, Title } from "./style"

export const Homepage = () => {
  return (
    <PageWrapper>
      <Title>
        Pokedex
      </Title>

      <PokemonList />
    </PageWrapper>
  )
}