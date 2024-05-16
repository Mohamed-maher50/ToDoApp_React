import { FC } from "react";
import { BsFolder, BsStar } from "react-icons/bs";
import TaskType from "../types/TaskType";
const TaskInformation: FC<TaskType> = ({
  note,
  isDone,
  mustCompleteDate,
  user,
  project,
  started,
  task,
}) => {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <BsFolder />
        <p className="text-[#84849D] capitalize">{project}</p>
      </div>
      <div className="flex  items-center justify-between  border-b-4 border-secandary">
        <h1 className="text-xl text-stone-200 ">{task}</h1>
        <span>
          <BsStar />
        </span>
      </div>
      <p className="text-[#84849D]">{note}</p>
    </div>
  );
};

export default TaskInformation;
