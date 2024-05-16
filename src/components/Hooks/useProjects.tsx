import { useState } from "react";
import { useEffect } from "react";
import { getProjects } from "../../api/ProjectsApi";
import { ProjectType } from "../../types/ProjectType";

const useProjects = () => {
  const [Projects, setProjects] = useState<null | ProjectType[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const response = await getProjects();
        setProjects(response.data);
        setIsLoading(false);
      })();
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    Projects,
    error,
    setProjects,
    setIsLoading,
  };
};

export default useProjects;
