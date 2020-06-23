import React, { useEffect, useCallback } from 'react'
import { getPokemonsAction  } from 'stores/actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// import PropTypes from 'prop-types'
import Dashboard  from 'container/template/Dashboard/Dashboard'

const Home = () => {
  const { listPokemons } = useSelector(
    ({ pokemons }) => ({
      listPokemons: pokemons.listPokemons
    }),
    shallowEqual)

  const dispatch = useDispatch()

  const getPokemons = useCallback(
    () => dispatch(getPokemonsAction()),
    [dispatch]
  );

  useEffect(() => {
    getPokemons()
  }, [getPokemons]);
  return (
    <Dashboard title='Pocket Monster' listPokemons={listPokemons} getPokemons={getPokemons}/>
  )
}

// Home.propTypes = {

// }

export default Home
