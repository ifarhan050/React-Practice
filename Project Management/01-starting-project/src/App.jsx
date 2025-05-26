import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectProject from "./components/SelectProject";

function App() {
  let content;
  const [SelectedProject, setSelectedProject] = useState({
    projects: [],
    selectedProjectId: undefined,
  });
 console.log(SelectedProject);

 
  const handleSelectProject = (projectId) => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        selectedProjectId: projectId,
      }
    }
    );
  }
  const handleStartAddProject = () => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        selectedProjectId: null,
      }
    });
  }
  const handleAddProject = (project) => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        projects:[...prev.projects, project],
        selectedProjectId: undefined,
       
      }
    });
  }
  const handleCancel = () => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        selectedProjectId: undefined,
      }
    });
  }
  const handleDeleteProject = (projectId) => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        projects: prev.projects.filter(project=>project.id !== projectId),
        selectedProjectId: undefined,
      }
    });
  }
  const handleEditProject = (projectId) => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        selectedProjectId: projectId,
      }
    });
  }
  const handleCompleteProject = (projectId) => {
    setSelectedProject(prev=>{
      return {
        ...prev,
        selectedProjectId: projectId,
      }
    });
  }

  const handleAddTask = (projectId, task) => {
    setSelectedProject(prev=>{
      const updatedProjects = prev.projects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, task],
          };
        }
        return project;
      });
      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  };

  const handleDeletetask = (projectId, taskId) => {
    setSelectedProject(prev=>{
      const updatedProjects = prev.projects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter(task => task.id !== taskId),
          };
        }
        return project;
      });
      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  };
  content=<SelectProject project={SelectedProject.projects.find(project=>project.id===SelectedProject.selectedProjectId)} onEditProject={handleEditProject} onDeleteProject={handleDeleteProject} onCompleteProject={handleCompleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeletetask} />;
  if (SelectedProject.selectedProjectId=== null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />;
  }
  else if (SelectedProject.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } 
  

  return (
    <>
    <main className="h-screen flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={SelectedProject.projects} onSelectProject={handleSelectProject} selectedProjectId={SelectedProject.selectedProjectId}/>
      {content}
    </main>
    </>
  );
}

export default App;
