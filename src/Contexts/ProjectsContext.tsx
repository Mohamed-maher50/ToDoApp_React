import axios from "axios";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProjects } from "../api/ProjectsApi";
import { ProjectType } from "../types/ProjectType";
import { useAuth } from "./AuthContext";
interface ProjectContextTypes {
  Projects: null | ProjectType[];
  error: null | string;
  isLoading: boolean;
  setProjects: React.Dispatch<React.SetStateAction<null | ProjectType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProjectsContext = createContext<ProjectContextTypes>({
  Projects: null,
  error: null,
  isLoading: false,
  setProjects: () => {},
  setIsLoading: () => {},
});
export const ProjectsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [Projects, setProjects] = useState<null | ProjectType[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await getProjects();
        setProjects(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <ProjectsContext.Provider
      value={{ Projects, setIsLoading, error, isLoading, setProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};
