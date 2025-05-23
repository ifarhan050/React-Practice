import React from 'react'
import NewTask from './NewTask'

function Tasks({tasks}) {
  return (
    <div className='w-[35rem] mt-16'>
      <h1 className='text-2xl font-bold mb-4'>Tasks</h1>
     {tasks ? tasks.map((task) => <p key={task.id}>{task.task}</p>) : <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>No Tasks Found</h1>
      </div>}
     <NewTask />
    </div>
  )
}

export default Tasks