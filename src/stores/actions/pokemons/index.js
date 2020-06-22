// pokemons Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
import { getPokemons, getPokemon } from 'utils/api'

export const SET_LOADING = 'pokemons/SET_LOADING';
export const SET_LIST_POKEMONS = 'pokemons/SET_LIST_POKEMONS';
export const SET_LIST_POKEMONS_MASTER = 'pokemons/SET_LIST_POKEMONS_MASTER';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const setListPokemons = (payload) => ({
  type: SET_LIST_POKEMONS,
  payload
});

export const setListPokemonsMaster = (payload) => ({
  type: SET_LIST_POKEMONS_MASTER,
  payload
});

export const getPokemonAction = (payload) => (dispatch) => {
  Promise.all(payload)
  .then((response) => {
    let result = []
    console.warn(response);
    
    response.map((element) => result.push({...element.data, image:`https://pokeres.bastionbot.org/images/pokemon/${element.data.id}.png`}))
    dispatch(setListPokemons(result))
    dispatch(setListPokemonsMaster(result))
    
  }).catch((err) => {
    console.warn(err)
  });

}

export const getPokemonsAction = () => (dispatch) => {
  getPokemons()
  .then(({ data }) => {
    
    const details = []
    data.results.map((element) => details.push(getPokemon(element.url)))
    console.warn(details, 'details');
    
    dispatch(getPokemonAction(details))
  }).catch((err) => {
    console.warn(err)
  });
}

export const filterData = (value) => (dispatch, getState) => {
  const data = getState().pokemons.listPokemonsMaster;

  let payload = [];

  
  payload = [
    ...data.filter(
      (element) =>
        element.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  ];
  

  dispatch(setListPokemons([...payload]));
};
