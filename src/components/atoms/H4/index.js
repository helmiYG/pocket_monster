// H4 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H4 = ({ className, color, weight, children }) =>{
  const classNames = classname('a-h4', className, color, weight);
  return <h4 className={classNames}>{children}</h4>;
};

H4.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node
};

H4.propTypes = {
propsName: PropTypes.string,
};

H4.defaultProps = {
propsName: '',
};

export default H4;
