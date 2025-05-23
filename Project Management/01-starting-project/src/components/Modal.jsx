import { useImperativeHandle, useRef } from 'react'
import React from 'react'
import { createPortal } from 'react-dom'

function Modal({children,onClose,ref}) {
    const dialogRef = useRef()
    useImperativeHandle(ref, () => ({
        open: () => {
            dialogRef.current.showModal()
        },
        close: () => {
            dialogRef.current.close()
        }
    }))
  return (
    <>
        {createPortal(
            <dialog className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'  ref={dialogRef} >
                <div className="bg-white rounded-lg shadow-lg p-6 w-[35rem]">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {children}
                </div>
            </dialog>,
            document.getElementById('modal-root')
        )}
    </>
  )
}

export default Modal