import React from 'react'

function ProjectsSidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 1</a>
        </li>
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 2</a>
        </li>
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 3</a>
        </li>
      </ul>
        <div className="mt-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Add Project
            </button>
        </div>
    </aside>

  )
}

export default ProjectsSidebar