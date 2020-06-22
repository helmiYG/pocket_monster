// Links Component
// --------------------------------------------------------

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Links = ({ className,
  variant,
  type,
  to,
  target,
  color,
  underline,
  onClick,
  tabIndex,
  children,
  weight }) => {
    const classNames = classname('a-links', className, variant, color, weight, {
      underline
    });
    return (
      <Fragment>
        {type === 'link' && (
          <a
            href={to}
            className={classNames}
            target={target}
            onClick={onClick}
            tabIndex={tabIndex}
          >
            {children}
          </a>
        )}
        {type === 'link-dom' && (
          <Link
            to={to}
            className={classNames}
            target={target}
            onClick={onClick}
            tabIndex={tabIndex}
          >
            {children}
          </Link>
        )}
      </Fragment>
    );
  }

Links.propTypes = {
propsName: PropTypes.string,
};

Links.defaultProps = {
propsName: '',
};

export default Links;
