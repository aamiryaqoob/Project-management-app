import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectSate, setprojectState] = useState({
    projectSelectedID: undefined,
    projects: []
  })

  function handleAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        projectSelectedID: null
      }
    })
  }

  let content;
  if (projectSate.projectSelectedID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />
  } else if (projectSate.projectSelectedID === null) {
    content = <NewProject />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
