import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjecteSelected from "./components/NoProjectSelected";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleSelectedProjectDetails(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      };
    });
  }
  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const findSelectedProject = projectState.projects.find(project => project.id === projectState.selectedProject)

  let content = <SelectedProjectDetails project={findSelectedProject} />;
  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjecteSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-2 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelected={handleSelectedProjectDetails} />
      {content}
    </main>
  );
}

export default App;
