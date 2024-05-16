import HeaderTitle from "./HeaderTitle";
import PrimaryButton from "./PrimaryButton";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import AddTaskForm from "./AddTaskForm";
const Tasks = () => {
  const [AddForm, setAddForm] = useState(false);
  return (
    <div className="flex flex-col gap-4 h-full">
      <HeaderTitle title="Tasks" />
      <div className="grow overflow-hidden min-h-[250px]">
        <AnimatePresence mode="wait">
          {AddForm ? (
            <AddTaskForm key={+!AddForm} />
          ) : (
            <motion.div
              key={+!AddForm}
              initial={{ x: "-100%", top: 0, opacity: 0 }}
              animate={{ x: 0, top: 0, opacity: 1 }}
              exit={{ x: "100%" }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-t w-full border-t-secandary pt-2">
        {AddForm && (
          <PrimaryButton
            value={"Back"}
            onClick={() => setAddForm(!AddForm)}
            className="w-fit mr-auto"
          />
        )}
        {!AddForm && (
          <PrimaryButton
            value={"Add Task"}
            onClick={() => setAddForm(!AddForm)}
            className="w-fit block ml-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
