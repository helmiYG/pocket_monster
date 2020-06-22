// H3 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H3 = ({ className, color, weight, children }) =>{
  const classNames = classname('a-h3', className, color, weight);
  return <h3 className={classNames}>{children}</h3>;
};

H3.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node
};

H3.propTypes = {
propsName: PropTypes.string,
};

H3.defaultProps = {
propsName: '',
};

export default H3;
