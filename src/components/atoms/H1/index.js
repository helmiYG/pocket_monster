// H1 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H1 = ({ className, color, weight, children }) => {
  const classNames = classname('a-h1', className, color, weight);
  return <h1 className={classNames}>{children}</h1>;
};

H1.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node
};

H1.propTypes = {
propsName: PropTypes.string,
};

H1.defaultProps = {
propsName: '',
};

export default H1;
