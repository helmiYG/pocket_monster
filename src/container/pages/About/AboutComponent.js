import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron } from 'components'

const AboutComponent = props => {
  return (
    <>
      <Jumbotron 
        head='About Project'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus neque, scelerisque vel turpis at, bibendum eleifend massa. Nam a dignissim neque. Nunc aliquam orci ac rhoncus pretium. Donec mattis viverra ante, eu fringilla velit fermentum eget.'
      />
    </>
  )
}

AboutComponent.propTypes = {
  propsName: PropTypes.string,  
}
AboutComponent.defaultProps = {
  propsName: '',  
}

export default AboutComponent
