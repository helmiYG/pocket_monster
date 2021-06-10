import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { shallowEqual, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Search, Card, Loader } from 'components'


const PokemonComponent = ({ listPokemons, getPokemons, handleScroll }) => {

  const { isSearching, name } = useSelector(
    ({ pokemons }) => ({
      isSearching: pokemons.isSearching,
      name: pokemons.name
    }), shallowEqual)

  return (
    <InfiniteScroll
        dataLength={listPokemons.length}
        next={getPokemons}
        onScroll={handleScroll}
        hasMore={isSearching || !name}
        loader={<Loader />}
      >
        <Search />
        <div className='list-content'>
          {
            listPokemons.map((element) => (
              <>
                <Card image={element.image} name={element.name} />
              </>
            ))
          }
        </div>
    </InfiniteScroll>
  )
}

PokemonComponent.propTypes = {
  listPokemons: PropTypes.array,
  getPokemons: PropTypes.func,
  handleScroll: PropTypes.func
}

PokemonComponent.defaultProps = {
  listPokemons: [],
  getPokemons: () => {},
  handleScroll: () => {}
}

export default PokemonComponent
