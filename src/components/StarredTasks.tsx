import { useState } from "react";
import useTasks from "./Hooks/useTasks";
import ShowTask from "./ShowTask";
import TaskCard from "./TaskCard";

const StarredTasks = () => {
  const { tasks } = useTasks(`?started=true`);
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div>
      {/* <ShowTask data={tasks} /> */}
      <TaskCard.Root>
        <TaskCard.Body
          className={
            isComplete
              ? "after:content-[''] line-clamp-1  after:absolute after:w-full after:h-[1px] after:bg-[#84849D] after:left-0 after:top-1/2"
              : ""
          }
        >
          asdfsf
        </TaskCard.Body>
      </TaskCard.Root>
    </div>
  );
};

export default StarredTasks;
