import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectSate, setprojectState] = useState({
    projectSelectedID: undefined,
    projects: []
  });

  function handleAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        projectSelectedID: null
      };
    })
  };

  function handleAddnewProject(projectData) {
    setprojectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        projectSelectedID: undefined,
        projects: [...prevState.projects, newProject]
      };
    })
  }

  let content;
  if (projectSate.projectSelectedID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />
  } else if (projectSate.projectSelectedID === null) {
    content = <NewProject onAdd={handleAddnewProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar 
      onStartAddProject={handleAddProject}
      projects={projectSate.projects} />
      {content}
    </main>
  );
}

export default App;
