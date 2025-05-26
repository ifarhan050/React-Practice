import React,{useState} from 'react'
import { FaTrash } from 'react-icons/fa';
import NewTask from './NewTask'

function Tasks({project,onAddTask, onDeleteTask}) {
  const tasks = project.tasks || [];
  return (
    <div className='w-[35rem] mt-16'>
      <h1 className='text-2xl font-bold mb-4'>Tasks</h1>
     {tasks.length>0 ? tasks.map((task) => 
      <div className='flex items-center justify-between border-b border-gray-300 p-2' key={task.id}>
        <div className='flex items-center gap-2'>
          <input type="checkbox" className='mr-2' checked={task.completed} onChange={() => {}} />
          <span className={task.completed ? 'line-through' : ''}>{task.task}</span>
        </div>
        <button onClick={() => onDeleteTask(project.id, task.id)} className='hover:text-red-700 transition-colors'><FaTrash /></button>
      </div>
     ) : <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>No Tasks Found</h1>
      </div>}
     <NewTask project={project} onAddTask={onAddTask} />
    </div>
  )
}

export default Tasks