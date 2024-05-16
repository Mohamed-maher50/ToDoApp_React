import axios from "axios";
import { ProjectsProvider } from "../Contexts/ProjectsContext";
import AllProjects from "./AllProjects";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsLayout() {
  return (
    <div className="py-2  flex max-h-52 overflow-y-auto scroll-nice  overflow-x-hidden flex-col gap-5">
      <ProjectsProvider>
        <CreateProjectForm />
        <AllProjects />
      </ProjectsProvider>
    </div>
  );
}

export default ProjectsLayout;
