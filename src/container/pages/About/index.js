// About Component
// --------------------------------------------------------

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Dashboard  from 'container/template/Dashboard/Dashboard'
import AboutComponent from './AboutComponent'

const About = props => {
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 550);
    };
  }, )

  return (
    <div>
      <Dashboard 
        title='Pocket Monster'
        content={<AboutComponent />}
        isMobile={isMobile} 
      />
    </div>
  )
}

About.propTypes = {
  propsName: PropTypes.string,  
}

About.defaultProps = {
  propsName: '',
};

export default About
