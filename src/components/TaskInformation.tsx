import { FC, useEffect, useRef } from "react";
import { BsFolder, BsStar } from "react-icons/bs";
import TaskType from "../types/TaskType";
interface TaskInformationProps extends TaskType {
  onBlur: () => void;
}
const TaskInformation: FC<TaskInformationProps> = ({
  note,
  isDone,
  mustCompleteDate,
  user,
  project,
  started,
  task,
  onBlur,
}) => {
  const myDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!myDivRef.current) return;
    myDivRef.current.focus();
  }, []);

  return (
    <div ref={myDivRef} className="grid gap-3 " onBlur={onBlur} tabIndex={0}>
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
