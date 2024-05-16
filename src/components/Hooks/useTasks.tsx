import { useEffect, useState } from "react";
import { getTasks } from "../../api/TasksApi";
import TaskType from "../../types/TaskType";

const useTasks = (query = "") => {
  const [tasks, setTasks] = useState<null | TaskType[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const response = await getTasks(query);
        setTasks(response.data);
        setIsLoading(false);
      })();
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  }, [query]);

  return {
    tasks,
    isLoading,
    error,
    setTasks,
  };
};

export default useTasks;
