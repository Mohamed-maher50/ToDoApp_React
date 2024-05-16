import * as Checkbox from "@radix-ui/react-checkbox";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { MdDelete, MdOutlineDone } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";

import TaskType from "../types/TaskType";
import cn from "../utils/cn";
interface TaskBoxPropsTypes extends TaskType {
  onTaskClick?: () => void;
  radioButtonOnChange: (value: Checkbox.CheckedState, id: string) => void;
  handleDeleteTask: (id: string) => void;
  onStartTask: (id: string) => void;
}
const Root: FC<PropsWithChildren> = ({ children }) => {
  const [isDone, setIsDone] = useState<Checkbox.CheckedState>();
  const [isStarred, setIsStarred] = useState<boolean>(false);
  //   useEffect(() => {
  //     setIsDone(Status);
  //     setIsStarred(started);
  //   }, [Status, started]);

  return (
    <div
      className={cn(
        "flex gap-2  py-2 text-sm items-center rounded-md shadow-lg px-2 cursor-pointer relative hover:bg-[#2f2f365d] duration-500 bg-[#2F2D36]",
        isDone && "bg-transparent hover:bg-transparent  "
      )}
    >
      {children}
      {/* <span
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
      </span> */}
      {/* {isDone && (
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
      )} */}
    </div>
  );
};

interface TaskCardBodyProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}
const Body = ({ children, className, ...props }: TaskCardBodyProps) => {
  return (
    <span className={cn("  grow   text-gray-400")}>
      <p
        {...props}
        className={cn(
          "relative after:w-0  w-fit after:duration-500",
          className
        )}
      >
        {children}
      </p>
    </span>
  );
};
export default {
  Root,
  Body,
};
