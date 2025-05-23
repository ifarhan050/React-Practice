import React from 'react'

function ProjectsSidebar({onStartAddProject,projects,onSelectProject,selectedProjectId}) {
  return (
    <aside className="w-1/3 bg-gray-100 py-16 px-8 border-r border-gray-300 md:w-1/4" >
      <h2 className="text-lg font-bold mb-8 md:text-2xl uppercase">Projects</h2>
      {/* <ul className="space-y-2">
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 1</a>
        </li>
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 2</a>
        </li>
        <li className="p-2 bg-white rounded shadow hover:bg-gray-50">
          <a href="#" className="text-gray-700">Project 3</a>
        </li>
      </ul> */}
        <div className="mt-4">
            <button onClick={onStartAddProject} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            + Add Project
            </button>

            <ul className="mt-4">
                {projects.map(project=>{

                    return (
                        <li key={project.id} className={`p-2 rounded-lg shadow-sm transition-colors duration-200 mb-2 ${selectedProjectId === project.id ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'}`}>
                            <button className="w-full text-left focus:outline-none" onClick={() => onSelectProject(project.id)}>
                                <span className="text-gray-700 font-medium">{project.title}</span>
                            </button>
                        </li>
                    )
                }         
                )}
            </ul>
        </div>
    </aside>

  )
}

export default ProjectsSidebar