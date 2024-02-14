import { PokemonStat } from "./PokemonStat";
import { PokemonTypes } from "./PokemonTypes";

export interface PokemonApidata {
  id: number;
  name: string;
  types: PokemonTypes[];
  height: number;
  weight: number;
  stats: PokemonStat[];
}
