import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

function NewProject({onAddProject}) {

   const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);
    const modalRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;
        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            modalRef.current.open();
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
    <>
    <Modal ref={modalRef} onClose={() => modalRef.current.close()}>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold mb-4'>Error</h1>
            <p className='text-gray-700 mb-4'>Please fill in all fields.</p>
            {/* <button onClick={() => modalRef.current.close()} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Close</button> */}
        </div>
    </Modal>
   <div className='w-[35rem] mt-16'>
        <h1 className='text-2xl font-bold mb-4'>New Project</h1>
        <menu className='flex items-center justify-end gap-4 my-4'> 
            <li className='mb-4'>
                <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Save</button>
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
   </>

  )
}

export default NewProject