import React from 'react'

function Input({title,textarea,...props}) {
  return (
    <p className='flex flex-col gap-1 mb-4'>
        <label className='mb-2 text-sm uppercase font-bold text-gray-700'>{title}</label>
        {textarea ? (
            <textarea {...props} className='w-full border border-gray-300 rounded-lg p-2' rows={4}></textarea>
        ) : (
            <input {...props} className='w-full border border-gray-300 rounded-lg p-2' />
        )}
    </p>
  )
}

export default Input