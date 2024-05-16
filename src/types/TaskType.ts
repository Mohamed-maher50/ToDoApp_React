export default interface TaskType {
  _id: string;
  task: string;
  note: string;
  isDone: boolean;
  project: string;
  started: boolean;
  mustCompleteDate: Date | undefined;
  user: string;
}
export interface newTaskTypes extends Omit<TaskType, "_id" | "user"> {}

export interface updateTaskTypes extends Partial<TaskType> {}
