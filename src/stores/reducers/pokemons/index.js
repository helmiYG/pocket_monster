// pokemons Reducers
// --------------------------------------------------------

import {
  SET_NAME,
  SET_LOADING,
  SET_NEXT_URL,
  SET_ON_SEARCHING,
  SET_LIST_POKEMONS,
  SET_LIST_POKEMONS_MASTER
} from 'stores/actions/pokemons';

const initialState = {
  isLoading: false,
  name: '',
  url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
  listPokemons: [],
  listPokemonsMaster: [],
  isSearching: true
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_NAME:
      return {
        ...state,
        name: payload
      };
    case SET_ON_SEARCHING:
      return {
        ...state,
        isSearching: payload
      };
    case SET_NEXT_URL:
      return {
        ...state,
        url: payload
      };
    case SET_LIST_POKEMONS:
      return {
        ...state,
        listPokemons: payload
      };
    case SET_LIST_POKEMONS_MASTER:
      return {
        ...state,
        listPokemonsMaster: payload
      };
    default:
      return state;
  }
};
