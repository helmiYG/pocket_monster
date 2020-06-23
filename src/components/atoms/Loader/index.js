// Loader Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Loader = () => {
  const classNames = classname('a-loader')
  return <div className={classNames}>Loading ...</div>
}

Loader.propTypes = {
propsName: PropTypes.string,
};

Loader.defaultProps = {
propsName: '',
};

export default Loader;
