import React, { useEffect, useCallback, useState } from 'react'
import { getPokemonsAction  } from 'stores/actions'
import { useDispatch } from 'react-redux'
// import PropTypes from 'prop-types'
import Dashboard  from 'container/template/Dashboard/Dashboard'
import HomeComponent from './HomeComponent'

const Home = () => {
  const [ isMobile, setIsMobile ] = useState(false)

  const dispatch = useDispatch()

  const getPokemons = useCallback(
    () => dispatch(getPokemonsAction()),
    [dispatch]
  );

  useEffect(() => {
    getPokemons()
  }, [getPokemons]);

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 550);
    };
    
  }, )
  return (
    <Dashboard 
      title='Pocket Monster'
      content={<HomeComponent isMobile={isMobile}  />}
      isMobile={isMobile} 
    />
  )
}

export default Home
