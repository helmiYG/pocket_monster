// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({ className,
  style,
  variant,
  family,
  tabIndex,
  onClick,
  disabled,
  full,
  type,
  children }) => {
    const classNames = classname('a-button', className, variant, family, {
      'full-content': full
    });
    return (
    <>
      <button
        className={classNames}
        type={type}
        onClick={onClick}
        tabIndex={tabIndex}
        style={style}
        disabled={disabled}
      >
        {children}
      </button>
    </>
    )
  }

Button.propTypes = {
propsName: PropTypes.string,
};

Button.defaultProps = {
propsName: '',
};

export default Button;
