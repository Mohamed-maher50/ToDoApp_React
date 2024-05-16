import { CheckedState } from "@radix-ui/react-checkbox";
import { AnimatePresence } from "framer-motion";
import { forwardRef, HTMLAttributes, useContext, useState } from "react";
import { deleteTask, toggleTaskStatus, updateTask } from "../api/TasksApi";
import TaskType from "../types/TaskType";
import ConfettiContext from "../Contexts/ConfettiContext";
import { motion } from "framer-motion";
import { IoChevronBackOutline } from "react-icons/io5";
import TaskInformation from "./TaskInformation";
import { TaskBoxWithMotion } from "./TaskBox";
import HeaderTitle from "./HeaderTitle";
import useTasks from "./Hooks/useTasks";
import { useSearchParams } from "react-router-dom";
import cn from "../utils/cn";

const ShowTask = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { setIsRunning } = useContext(ConfettiContext);

    const [selectedTask, setSelectedTask] = useState<null | TaskType>(null);
    const [params] = useSearchParams();
    const { tasks, setTasks } = useTasks(`?${params.toString()}`);

    const handleDeleteTask = async (taskId: string) => {
      await deleteTask(taskId);
      setTasks((prev) => {
        if (prev == null) return null;
        return prev.filter((task) => {
          return task._id !== taskId;
        });
      });
    };
    const ToggleStatusOfTask = async (status: CheckedState, id: string) => {
      if (status) {
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), 3000);
        setTasks((prev) => {
          if (!prev) return null;
          return prev?.map((task) => {
            if (task._id == id) task.isDone = true;
            return task;
          });
        });
      } else {
        setTasks((prev) => {
          if (!prev) return null;
          return prev?.map((task) => {
            if (task._id == id) task.isDone = false;
            return task;
          });
        });
      }
      toggleTaskStatus(id)
        .then((res) => {})
        .catch((err) => {});
    };
    const onStartClick = (id: string) => {
      const task = tasks?.find((t) => t._id === id);
      if (task)
        updateTask(id, {
          started: !task.started,
        });
      setTasks((prev) => {
        if (!prev) return null;
        return prev?.map((taskObj) => {
          if (taskObj._id === id) {
            taskObj.started = !taskObj.started;
          }
          return taskObj;
        });
      });
    };
    return (
      <div ref={ref} className={cn(className)} {...props}>
        <AnimatePresence mode="popLayout">
          {selectedTask && (
            <span
              className="mt-auto block "
              onClick={() => setSelectedTask(null)}
            >
              <IoChevronBackOutline className="block p-1 box-content bg-body rounded-full cursor-pointer duration-300 hover:translate-x-2 translate-x-3 my-2" />
            </span>
          )}

          {selectedTask ? (
            <motion.div
              className="h-full"
              key={2}
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                },
              }}
              exit={{
                x: "-200%",
              }}
            >
              <TaskInformation {...selectedTask} />
            </motion.div>
          ) : (
            <div className="grid gap-2">
              {tasks?.map((data, index) => (
                <TaskBoxWithMotion
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{
                    x: "-100%",
                  }}
                  transition={{
                    duration: index * 0.1,
                  }}
                  onStartTask={onStartClick}
                  onTaskClick={() => {
                    setSelectedTask(data);
                  }}
                  handleDeleteTask={handleDeleteTask}
                  radioButtonOnChange={ToggleStatusOfTask}
                  key={data._id}
                  {...data}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
        {tasks?.length === 0 && (
          <HeaderTitle className="text-sm w-fit mx-auto block mt-20 text-center capitalize text-gray-400">
            {"not found any tasks"}
          </HeaderTitle>
        )}
      </div>
    );
  }
);
export const AllTasksWithMotion = motion(ShowTask);

export default ShowTask;
