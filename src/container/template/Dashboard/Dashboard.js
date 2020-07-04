import React from 'react'
import PropTypes from 'prop-types'
import { Header, Content, Loader } from 'components'
import { shallowEqual, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.scss'

const Dashboard = ({ title, listPokemons, getPokemons, handleScroll, isMobile }) => {
  const { isSearching, name } = useSelector(
    ({ pokemons }) => ({
      isSearching: pokemons.isSearching,
      name: pokemons.name
    }), shallowEqual)

  return (
    <div className='dashboard'>
      <Header title={title} isMobile={isMobile} ></Header>
      <InfiniteScroll
        dataLength={listPokemons.length}
        next={getPokemons}
        onScroll={handleScroll}
        hasMore={isSearching || !name}
        loader={<Loader />}
      >
        <Content listPokemons={listPokemons} />
      </InfiniteScroll>
    </div>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
  isMobile: PropTypes.bool,
  getPokemons: PropTypes.func,
  handleScroll: PropTypes.func,
  listPokemons: PropTypes.array
}

Dashboard.defaultProps = {
  title: '',
  isMobile: false,
  getPokemons: () => {},
  handleScroll: () => {},
  listPokemons: []
}

export default Dashboard
