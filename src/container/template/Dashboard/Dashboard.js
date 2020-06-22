import React from 'react'
import PropTypes from 'prop-types'
import { Header, Content } from 'components'
import './styles.scss'

const Dashboard = ({ title, listPokemons }) => {
  return (
    <div className='dashboard'>
      <Header title={title}></Header>
      <Content listPokemons={listPokemons} />
    </div>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
  listPokemons: PropTypes.array
}

Dashboard.defaultProps = {
  title: '',
  listPokemons: []
}

export default Dashboard
