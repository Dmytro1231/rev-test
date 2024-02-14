import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { Container, Image, ImageWrapper, Item, Text } from "./style";
import * as pokemonsActions from '../../features/pokemons'; 
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import { Link, useSearchParams } from "react-router-dom";
import { PagePagination } from "../PagePagination/PagePagination";
import { capitalize } from "../../utils/capitalizeName";
import { ErrorMassage } from "../Error/Error";
import { Loader } from "../Loader/Loader";


export const PokemonList = () => {
  const [searchParams] = useSearchParams();
  const { data, loading, error } = useAppSelector(state => state.pokemons);
  const dispatch = useAppDispatch();

  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 20;
  const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const currentPosition = (currentPage - 1) * itemsPerPage;
  const showedPokemons = data? data.slice(currentPosition, currentPosition + itemsPerPage) : [];

  useEffect(() => {
    dispatch(pokemonsActions.fetchData());
  }, [])

  return (
    <>
      {error && (
        <ErrorMassage massage="Error on pokemons list loading!" />
      )}

      {loading && <Loader/>}

      {data && (
        <>
          <Container>
            {showedPokemons.map(({name, url})=> (
              <Item key={name}>
                <ImageWrapper>
                  <Link to={`/details/${name}`}>
                    <Image 
                      src={require(`../../assets/${getIdFromUrl(url)}.png`)} 
                      alt={name + ' image'} 
                    />
                  </Link>
                </ImageWrapper>

                <Text>
                  {capitalize(name)}
                </Text>
              </Item>
            ))}
          </Container>

          <PagePagination pageCount={pageCount} currentPage={currentPage} />
        </>
      )}
    </>
  );
};
