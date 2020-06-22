// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Card = ({ image, className, name }) => {
  const classNames = classname('m-Card', className);
  // image
  return (
    <div className={classNames}>
      <img src={image} alt='pokemon'/>
      {name}
    </div>
  );
}

Card.propTypes = {
propsName: PropTypes.string,
};

Card.defaultProps = {
propsName: '',
};

export default Card;
