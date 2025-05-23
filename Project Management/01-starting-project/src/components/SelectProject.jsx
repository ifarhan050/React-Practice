import React from 'react'
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import Tasks from './Tasks';
function SelectProject({project,onDeleteProject, onEditProject, onCompleteProject}) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
  return (
   <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
   <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
      <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
        {project.title}
      </h1>
      <button onClick={() => onDeleteProject(project.id)} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all shadow-sm">
        <FaTrash />
        Delete
      </button>
    </div>
    <div className="flex flex-wrap items-center gap-4">
      <button onClick={() => onEditProject(project.id)} className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl hover:bg-yellow-500 transition-all shadow-sm">
        <FaEdit />
        Edit
      </button>
      <button onClick={() => onCompleteProject(project.id)} className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all shadow-sm">
        <FaCheckCircle />
        Complete
      </button>
    </div>
  </header>
  <div className="mt-6 space-y-4">
    <p className="text-gray-600 text-lg">
      <span className="font-semibold text-gray-800">Due Date:</span>{' '}
      {formatDate(project.dueDate)}
    </p>
    <p className="text-gray-600 text-lg">
      <span className="font-semibold text-gray-800">Description:</span>{' '}
      {project.description}
    </p>
  </div>
    <div className="mt-8">
        <Tasks />
    </div>
  </div>
  )
}

export default SelectProject