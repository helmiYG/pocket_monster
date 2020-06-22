// Header Component
// --------------------------------------------------------
import React  from "react";
import PropTypes from 'prop-types';
import { Links } from 'components'
import classname from 'classnames';
import './styles.scss';


const Header = ({ className, title }) => {
  const classNames = classname('o-Header', className);
  return (
    <div className={classNames}>
        <div className='header-title'>
          {title}
        </div>
        <ul className='list-menu'>
          <li>
            <Links type='link-dom' to='/'>
            Home
            </Links>
          </li>
          <li>
            <Links type='link-dom' to='/'>
              About
            </Links>
            
          </li>
        </ul>
    </div>
  );
}


Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
export default Header;