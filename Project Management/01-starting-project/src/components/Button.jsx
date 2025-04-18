import React from 'react'

function Button({children,...props}) {
  return (
    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600' {...props}>
        {children}
    </button>
  )
}

export default Button