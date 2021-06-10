// Jumbotron Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
import { H1 } from 'components'

const Jumbotron = ({ className, head, body }) => {
  const classNames = classname('o-jumbotron', className);

  return (
    <div className={classNames}>
      <div className='jumbotron-header'>
        <H1>{head}</H1>
      </div>
      <div className='jumbotron-content'>
        <div className='about-content'>
          {body}
        </div>
        <div className='about-content'>
          {body}
        </div>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  body: PropTypes.string,
  head: PropTypes.string
};

Jumbotron.defaultProps = { 
  content: '',
  body: '',
  head: '',
  className: '',
};

export default Jumbotron;
