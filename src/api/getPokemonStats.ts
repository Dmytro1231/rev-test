export const getPokemonStats = (pokemonName: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json());
};