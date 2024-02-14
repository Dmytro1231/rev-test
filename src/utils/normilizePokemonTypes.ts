import { PokemonTypes } from "../types/PokemonTypes";
import { capitalize } from "./capitalizeName";

export const normilizePokemonTypes = (types: PokemonTypes[]) => {
  const typesName = types.map(item => capitalize(item.type.name));

  return typesName.length > 0
    ? typesName.join(', ')
    : typesName[0];
};