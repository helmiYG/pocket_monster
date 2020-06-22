import axios from 'axios';

export const getPokemons = () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
export const getPokemon = (url) => axios.get(url);