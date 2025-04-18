import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  let content;
  const [SelectedProject, setSelectedProject] = useState({
    projects: [],
    selectedProjectId: undefined,
  });
 console.log(SelectedProject);
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
        selectedProjectId: project.id,
       
      }
    });
  }
  if (SelectedProject.selectedProjectId=== null) {
    content = <NewProject onAddProject={handleAddProject} />;
  }
  else if (SelectedProject.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } 
  

  return (
    <>
    <main className="h-screen flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
    </>
  );
}

export default App;
