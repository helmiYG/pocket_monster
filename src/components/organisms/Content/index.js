import React from 'react'
import classname from 'classnames';
import PropTypes from 'prop-types'
import { Search, Card } from 'components'
import './styles.scss'

const Content = ({ className, listPokemons }) => {
  const classNames = classname('o-content', className);
  return (
    <div className={classNames}>
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
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  listPokemons: PropTypes.array
}


Content.defaultProps = {
  className: '',
  listPokemons: []
}

export default Content
