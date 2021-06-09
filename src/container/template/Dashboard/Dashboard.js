import React from 'react'
import PropTypes from 'prop-types'
import { Header, Content } from 'components'
import './styles.scss'

const Dashboard = ({ title, content, isMobile }) => {
  return (
    <div className='dashboard'>
      <Header title={title} isMobile={isMobile} ></Header>
        <Content content={content} />
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
