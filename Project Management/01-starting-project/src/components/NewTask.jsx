import React, { useState } from 'react'

function NewTask({project, onAddTask}) {
   const [newTask, setNewTask] = useState();
   const handleTaskChange = (e) => {
    setNewTask(e.target.value);
   }
   const handleAddTask = () => {
    if (newTask.trim() === '') {
      alert('Please enter a task name');
      return;
    }
    const task = {
      id: Math.random().toString(),
      task: newTask,
      completed: false,
    };
    onAddTask(project.id, task);
    setNewTask('');
   }
   

  return (
    <div className='w-[35rem] mt-16 bg-white rounded-lg p-6 shadow-lg'>
      <h1 className='text-2xl font-bold mb-4'>New Task</h1>
      <div className='flex flex-row'>
        <div className='flex-1'>
          <input type="text" value={newTask} onChange={handleTaskChange} placeholder='Enter task name' className='border border-gray-300 rounded-lg px-4 py-2 w-full' />
        </div>
        <div className='flex-none ml-4'>
          <button onClick={handleAddTask} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask