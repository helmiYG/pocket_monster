import React from 'react'
import classname from 'classnames';
import PropTypes from 'prop-types'
import './styles.scss'

const Content = ({ className, content }) => {
  const classNames = classname('o-content', className);
  return (
    <div className={classNames}>
      {content}
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node
}


Content.defaultProps = {
  className: '',
  content: ''
}

export default Content
