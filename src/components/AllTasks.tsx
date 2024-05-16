import { AllTasksWithMotion } from "./ShowTask";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import HeaderTitle from "./HeaderTitle";
import { AnimatePresence } from "framer-motion";
import AddTaskForm from "./AddTaskForm";

const AllTasks = () => {
  const [AddForm, setAddForm] = useState(false);
  return (
    <>
      <HeaderTitle title="Tasks" />
      <div className=" overflow-hidden ">
        <AnimatePresence mode="wait">
          {AddForm ? (
            <AddTaskForm key={+!AddForm} />
          ) : (
            <AllTasksWithMotion
              initial={{ x: "-100%", top: 0, opacity: 0 }}
              animate={{ x: 0, top: 0, opacity: 1 }}
              exit={{ x: "100%" }}
              className="h-full"
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AllTasks;
