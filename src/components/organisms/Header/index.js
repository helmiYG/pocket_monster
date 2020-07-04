// Header Component
// --------------------------------------------------------
import React, { useState, useEffect }  from "react";
import PropTypes from 'prop-types';
import { Links } from 'components'
import classname from 'classnames';
import './styles.scss';


const Header = ({ className, title, isMobile }) => {
  const [isNav, setIsNav] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', updateDimension)
  }, [])

  const navSlide = () => {
    const listMenuLink = document.querySelectorAll('.list-menu li');
    if (!isNav) {
      listMenuLink.forEach((link) => {
        link.style.animation = 'movinBottom 0.8s ease-in forwards 0s'
      })
    } else {
      listMenuLink.forEach((link) => {
        link.style.animation = 'movinTop 0.8s ease-in forwards 0s'
      })
    }
    setIsNav(!isNav)
  }

  const updateDimension = () => {
    if(window.innerWidth > 790) {
      setIsNav(false)
      const listMenuLink = document.querySelectorAll('.list-menu li');
      listMenuLink.forEach((link) => {
      link.style.animation = ''
    })
    } 
    
  }

  const classNames = classname('o-Header', className);
  const classNameListMenu = classname('list-menu', {
    'nav-active' : isNav
  })

  const classBurger = classname('burger', {
    'toggle' : isNav
  })
  
  
  return (
    <div className={classNames}>
        <div className='header-title'>
          {title}
        </div>
        <ul className={classNameListMenu}>
          <li>
            <Links type='link-dom' className={isMobile ? 'mobile' : ''} to='/'>
            Home
            </Links>
          </li>
          <li>
            <Links type='link-dom' className={isMobile ? 'mobile' : ''} to='/'>
              About
            </Links>
          </li>
        </ul>
        <div className={classBurger} onClick={navSlide}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
    </div>
  );
}


Header.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool
};
Header.defaultProps = {
  className: '',
  isMobile: false
};
export default Header;