import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { capitalize } from "../../utils/capitalizeName";
import { PokemonApidata } from "../../types/PokemonApiData";
import { Image, ImageWrapper, PokemonName, PokemonStatsWrapper, PokemonWrapper, StatWrapper } from "./style";
import { getPokemonStats } from "../../api/getPokemonStats";
import { normilizePokemonTypes } from "../../utils/normilizePokemonTypes";
import { Pokemon } from "../../types/Pokemon";
import { getStatValue } from "../../utils/normalizeStatValue";
import { Loader } from "../Loader/Loader";
import { ErrorMassage } from "../Error/Error";

export const StatsPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { pokemonName } = useParams();


  const getStats = async() => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { 
        id,
        name,
        weight,
        height,
        types,
        stats,
      }: PokemonApidata = await getPokemonStats(pokemonName || '');

      const normilizedPokemonData: Pokemon = {
        id,
        name,
        weight,
        height,
        types: normilizePokemonTypes(types),
        attack: getStatValue('attack', stats),
        defense: getStatValue('defense', stats),
        hp: getStatValue('hp', stats),
      }

      setPokemon(normilizedPokemonData);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStats();
  }, [])

  return (
    <div>
      <Breadcrumbs pokemonName={capitalize(pokemonName || '')} />
      {isLoading && <Loader/>}

      {isError && (
        <ErrorMassage massage="Error on pokemon detailed stats loading!" />
      )}
      

      {pokemon && (
        <PokemonWrapper>
          <ImageWrapper>
            <Image 
              src={require(`../../assets/${pokemon.id}.png`)} 
              alt={pokemon.name + ' image'} 
            />
          </ImageWrapper>

          <PokemonStatsWrapper>
            <PokemonName>
              {capitalize(pokemon.name)}
            </PokemonName>

            {Object.entries(pokemon).map(([key, value]) => { 
              if (key === 'id' || key === 'name') {
                return null;
              }

              return (
                <StatWrapper>
                  <p>
                    {capitalize(key)}
                  </p>

                  <p>
                    {value}
                  </p>
                </StatWrapper>
              )
            })}
          </PokemonStatsWrapper>
        </PokemonWrapper>
        )
      }
    </div>
  );
};