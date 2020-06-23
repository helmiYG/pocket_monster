// pokemons Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
import { getPokemons, getPokemon } from 'utils/api'

export const SET_LOADING = 'pokemons/SET_LOADING';
export const SET_LIST_POKEMONS = 'pokemons/SET_LIST_POKEMONS';
export const SET_NEXT_URL = 'pokemons/SET_NEXT_URL';
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

export const setNextURL = (payload) => ({
  type: SET_NEXT_URL,
  payload
})

export const getPokemonAction = (payload) => (dispatch, getState) => {
  const listPokemonsMaster = getState().pokemons.listPokemonsMaster;
  Promise.all(payload)
  .then((response) => {
    let result = []
    response.map((element) => result.push({...element.data, image:`https://pokeres.bastionbot.org/images/pokemon/${element.data.id}.png`}))
    const newResult = listPokemonsMaster.concat(result)
    dispatch(setListPokemons([...newResult]))
    dispatch(setListPokemonsMaster([...newResult]))
    
  }).catch((err) => {
    console.warn(err)
  });

}

export const getPokemonsAction = () => (dispatch, getState) => {
  const url = getState().pokemons.url;
  getPokemons(url)
  .then(({ data }) => {
    dispatch(setNextURL(data.next))
    const details = []
    data.results.map((element) => details.push(getPokemon(element.url)))
    
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
