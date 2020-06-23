// pokemons Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  SET_NEXT_URL,
  SET_LIST_POKEMONS,
  SET_LIST_POKEMONS_MASTER
} from 'stores/actions/pokemons';

const initialState = {
  isLoading: false,
  url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
  listPokemons: [],
  listPokemonsMaster: []
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
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
