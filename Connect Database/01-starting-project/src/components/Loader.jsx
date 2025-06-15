import React from 'react'
import PropTypes from 'prop-types'
import cat from '../assets/cat.gif'
function Loader({children,container,...props}) {
  const Container= container || 'div';

  return (
    <Container {...props}>
      {children || <img src={cat} alt="Loading..." />}
    </Container>
  )
}

Loader.propTypes = {
  children: PropTypes.node,
  container: PropTypes.elementType,
}
export default Loader