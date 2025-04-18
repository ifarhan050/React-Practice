import React, { useRef } from 'react'
import Input from './Input'

function NewProject({onAddProject}) {

   const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;
        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            alert('Please fill in all fields');
            return;  
        }
        const project = {
            title,
            description,
            dueDate,
            id: Math.random().toString(),
        };
        onAddProject(project);
        console.log(project);
        // titleRef.current.value = '';
        // descriptionRef.current.value = '';
        // dueDateRef.current.value = '';
        // Close the form after submission
        
    }
  return (
   <div className='w-[35rem] mt-16'>
        <h1 className='text-2xl font-bold mb-4'>New Project</h1>
        <menu className='flex items-center justify-end gap-4 my-4'> 
            <li className='mb-4'>
                <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Create New Project</button>
            </li>
            <li className='mb-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Cancel</button>
            </li>
        </menu>
        <div className=' items-center justify-center'>
          <Input ref={titleRef}  title='Project Name' type='text' placeholder='Enter project name' />
          <Input ref={descriptionRef} title='Project Description' textarea placeholder='Enter project description' />
          <Input ref={dueDateRef} title='Due Date' type='date' placeholder='Enter Due Date' />
        </div>

   </div>

  )
}

export default NewProject