export const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/generation/1/')
    .then(res => res.json());
}