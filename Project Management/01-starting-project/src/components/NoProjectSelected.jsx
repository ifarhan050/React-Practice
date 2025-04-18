import React from 'react'
import Button from './Button'
import noprojectimg from '../assets/no-projects.png'

function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noprojectimg} alt="No Project Selected" className='w-16 h-16 object-contain mx-auto' />
        <h1 className='text-2xl font-bold text-center mt-4'>No Project Selected</h1>
        <p className='text-center text-gray-500'>Please select a project from the sidebar.</p>
        <p className='mt-4'>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected