import { PokemonStat } from "../types/PokemonStat";

export const getStatValue = (stat: string, pokemonStats: PokemonStat[]) => {
  return pokemonStats.find(pokemonStat => pokemonStat.stat.name === stat)?.base_stat || -1;
};