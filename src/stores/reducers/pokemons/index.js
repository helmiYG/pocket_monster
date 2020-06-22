// pokemons Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  SET_LIST_POKEMONS,
  SET_LIST_POKEMONS_MASTER
} from 'stores/actions/pokemons';

const initialState = {
  isLoading: false,
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
