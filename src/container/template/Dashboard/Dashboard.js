import React from 'react'
import PropTypes from 'prop-types'
import { Header, Content, Loader } from 'components'
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.scss'

const Dashboard = ({ title, listPokemons, getPokemons, handleScroll }) => {

  return (
    <div className='dashboard'>
      <Header title={title}></Header>
      <InfiniteScroll
        dataLength={listPokemons.length}
        next={getPokemons}
        onScroll={handleScroll}
        hasMore={true}
        loader={<Loader />}
      >
        <Content listPokemons={listPokemons} />
      </InfiniteScroll>
    </div>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
  getPokemons: PropTypes.func,
  handleScroll: PropTypes.func,
  listPokemons: PropTypes.array
}

Dashboard.defaultProps = {
  title: '',
  getPokemons: () => {},
  handleScroll: () => {},
  listPokemons: []
}

export default Dashboard
