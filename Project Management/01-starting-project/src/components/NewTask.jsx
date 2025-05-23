import React, { useState } from 'react'

function NewTask() {
   const [newTask, setNewTask] = useState();
   const handleTaskChange = (e) => {
    setNewTask(e.target.value);
   }
  return (
    <div className='w-[35rem] mt-16 bg-white rounded-lg p-6 shadow-lg'>
      <h1 className='text-2xl font-bold mb-4'>New Task</h1>
      <div className='flex items-center justify-center'>
        <input type="text" value={newTask} onChange={handleTaskChange} placeholder='Enter task name' className='border border-gray-300 rounded-lg px-4 py-2 w-full' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-600 transition-all'>Add Task</button>
      </div>
    </div>
  )
}

export default NewTask