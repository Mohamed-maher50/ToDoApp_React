import axios from "axios";
import { newTaskTypes, updateTaskTypes } from "../types/TaskType";
export const createNewTask = async (data: newTaskTypes) => {
  const response = await axios.post("/api/v1/tasks", {
    ...data,
  });
  return response;
};
export const toggleTaskStatus = async (TaskId: string) => {
  const response = await axios.put(`/api/v1/tasks/toggle/${TaskId}`);
  return response;
};
export const getTasks = async (query = "") => {
  const response = await axios.get(`/api/v1/tasks/${query}`);
  return response;
};
export const deleteTask = async (id = "") => {
  const response = await axios.delete(`/api/v1/tasks/${id}`);
  return response;
};
export const updateTask = async (id = "", values: updateTaskTypes) => {
  return await axios.put(`/api/v1/tasks/${id}`, values);
};
