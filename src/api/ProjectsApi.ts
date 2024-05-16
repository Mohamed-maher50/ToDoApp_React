import axios, { AxiosResponse } from "axios";
import { ProjectType } from "../types/ProjectType";
export const getProjects = async () => {
  const response: AxiosResponse<ProjectType[]> = await axios.get(
    "/api/v1/projects"
  );
  return response;
};
export const createNewProjects = async (projectName: string | undefined) => {
  const response = await axios.post("/api/v1/projects", {
    projectName,
  });
  return response;
};
export const deleteProject = async (id: string) => {
  const response: AxiosResponse<ProjectType> = await axios.delete(
    `/api/v1/projects/${id}`
  );
  return response;
};
export const updateProject = async (
  id: string,
  values: Partial<ProjectType>
) => {
  const response: AxiosResponse<ProjectType> = await axios.put(
    `/api/v1/projects/${id}`,
    {
      ...values,
    }
  );
  return response;
};
