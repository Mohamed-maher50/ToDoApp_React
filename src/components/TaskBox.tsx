import * as Checkbox from "@radix-ui/react-checkbox";
import { FC, forwardRef, useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { MdDelete, MdOutlineDone } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";

import TaskType from "../types/TaskType";
import cn from "../utils/cn";
import { motion } from "framer-motion";
interface TaskBoxPropsTypes extends TaskType {
  onTaskClick?: () => void;
  radioButtonOnChange: (value: Checkbox.CheckedState, id: string) => void;
  handleDeleteTask: (id: string) => void;
  onStartTask: (id: string) => void;
}
const TaskBox = forwardRef<HTMLDivElement, TaskBoxPropsTypes>(
  (
    {
      onTaskClick,
      _id,
      isDone: Status,
      note,
      started,
      handleDeleteTask,
      radioButtonOnChange,
      onStartTask,
    },
    ref
  ) => {
    const [isDone, setIsDone] = useState<Checkbox.CheckedState>(Status);
    const [isStarred, setIsStarred] = useState<boolean>(false);
    useEffect(() => {
      setIsDone(Status);
      setIsStarred(started);
    }, [Status, started]);

    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-2  py-2 text-sm items-center rounded-md shadow-lg px-2 cursor-pointer relative hover:bg-[#2f2f365d] duration-500 bg-[#2F2D36]",
          isDone && "bg-transparent hover:bg-transparent  "
        )}
      >
        <div className="flex  items-center">
          <Checkbox.Root
            className={cn(
              " rounded-xl duration-500   flex h-5 w-5 text-primary text-sm appearance-none items-center justify-center  bg-[#84849D]  outline-none ",
              !isDone &&
                "bg-transparent hover:bg-transparent border-[#84849D] border "
            )}
            defaultChecked
            checked={isDone}
            onCheckedChange={(e) => radioButtonOnChange(e, _id)}
            id="c1"
          >
            {isDone && <MdOutlineDone />}
          </Checkbox.Root>
        </div>

        <span
          onClick={() => {
            onTaskClick && onTaskClick();
          }}
          className={cn(" line-clamp-1 grow   text-gray-400")}
        >
          <p
            className={cn(
              "relative after:w-0  w-fit after:duration-500",
              isDone &&
                " after:content-['']   after:absolute after:w-full after:h-[1px] after:bg-[#84849D] after:left-0 after:top-1/2"
            )}
          >
            {note?.slice(0, 80)}
          </p>
        </span>
        {isDone && (
          <MdDelete
            onClick={() => handleDeleteTask(_id)}
            className="text-lg text-[#84849D] hover:scale-110 duration-300 ease-in-out"
          />
        )}
        {isStarred ? (
          <FaStar
            onClick={() => onStartTask(_id)}
            className="text-lg fill-slate-500 text-[#84849D] hover:scale-110 duration-300 ease-in-out"
          />
        ) : (
          <FaRegStar
            onClick={() => onStartTask(_id)}
            className="text-lg fill-slate-500 text-[#84849D] hover:scale-110 duration-300 ease-in-out"
          />
        )}
      </div>
    );
  }
);
export const TaskBoxWithMotion = motion(TaskBox);

export default TaskBox;
