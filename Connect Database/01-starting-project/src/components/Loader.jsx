import React from 'react'
import cat from '../assets/cat.gif'
function Loader({children,container,...props}) {
  const Container= container || 'div';

  return (
    <Container {...props}>
      {children || <img src={cat} alt="Loading..." />}
    </Container>
  )
}

export default Loader