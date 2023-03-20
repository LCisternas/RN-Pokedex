import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = response.data.next;
    // setSimplePokemonList(response.data.results)
    mapPokemonListToSimplePokemon(response.data.results)
  }

  const mapPokemonListToSimplePokemon = ( pokemonList: Result[] ) => {
    const newPokemonLists: SimplePokemon[] = pokemonList.map((poke) => {
      const urlParts = poke.url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, picture, name: poke.name }
    })
    setSimplePokemonList([...simplePokemonList, ...newPokemonLists]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return {
    isLoading,
    simplePokemonList,
    loadPokemons
  }
  
}
