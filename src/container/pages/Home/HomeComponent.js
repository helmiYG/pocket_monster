import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactTypingEffect from 'react-typing-effect';

import './styles.scss'

import { H1 } from 'components'


const HomeComponent = ({ isMobile }) => {

  const webText = ["Hello....", "Welcome to My Website!!"]
  const mobileText = ["Hello....", "Welcome"]
  const [textTyping, setTextTyping] = useState(webText)
  useEffect(() => {
    if (isMobile) {
      setTextTyping(mobileText)
    } else {
      setTextTyping(webText)
    }
  },[isMobile] )

  useEffect(() => {
    if (window.innerWidth < 550) {
      setTextTyping(mobileText)
    } else {
      setTextTyping(webText)
    }
  },[mobileText, webText])

  return (
    <div className='p-home'>
      <div className='p-home-title'>
        <ReactTypingEffect
          text={textTyping}
          cursorRenderer={cursor => <H1>{cursor}</H1>}
          displayTextRenderer={(text, i) => {
            return (
              <H1>
                {text}
              </H1>
            );
          }}        
        />
      </div>
      <hr className='border'/>
      <div className='p-home-desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus neque, scelerisque vel turpis at, bibendum eleifend massa. Nam a dignissim neque. Nunc aliquam orci ac rhoncus pretium. Donec mattis viverra ante, eu fringilla velit fermentum eget.
      </div>
    </div>
  )
}

HomeComponent.propTypes = {
  isMobile : PropTypes.bool
}

HomeComponent.defaultProps = {
  isMobile: false
}

export default HomeComponent
