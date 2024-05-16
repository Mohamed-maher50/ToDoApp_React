import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import FormLabel from "./FormLabel";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import SelectDemo from "./SelectBox";
import { getProjects } from "../api/ProjectsApi";
import { createNewTask } from "../api/TasksApi";
import { newTaskTypes } from "../types/TaskType";
import { ProjectType } from "../types/ProjectType";
import { useMultiFormsContext } from "../Contexts/MultiForms";
const initialTaskValues = {
  task: "",
  note: "",
  isDone: false,
  project: "",
  started: false,
  mustCompleteDate: undefined,
};
const formVariants = {
  initial: {
    x: "-40%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "100%",
  },
};
const AddTaskForm = () => {
  const [Projects, setProjects] = useState<null | ProjectType[]>(null);
  const [taskData, setTaskData] = useState<newTaskTypes>(initialTaskValues);

  const addNewTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createNewTask(taskData);
    if (res.status == 200) {
      setTaskData(initialTaskValues);
      prev();
    }
  };

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data);
    });
  }, []);
  const onTaskDateChange = (value: string, name: string) => {
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const { prev } = useMultiFormsContext();
  return (
    <motion.form
      onSubmit={addNewTask}
      variants={formVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className="grid gap-5"
    >
      <div>
        <FormLabel>Task</FormLabel>
        <Input
          onChange={(e) => onTaskDateChange(e.target.value, "task")}
          placeholder="Task Name"
        />
      </div>
      <div>
        <FormLabel>Note</FormLabel>
        <Input
          placeholder="Note"
          onChange={(e) => onTaskDateChange(e.target.value, "note")}
        />
      </div>
      <div className="flex gap-5 max-sm:flex-col ">
        <div className="flex-1">
          <FormLabel>Project</FormLabel>
          <SelectDemo
            onValueChange={(e: string) => {
              onTaskDateChange(e, "project");
            }}
            options={Projects || []}
          />
        </div>
        <div className="flex-1">
          <FormLabel>Date</FormLabel>
          <Input
            onChange={(e) => {
              onTaskDateChange(e.target.value, "mustCompleteDate");
            }}
            type={"date"}
            placeholder="Task Name"
          />
        </div>
      </div>

      <PrimaryButton className="w-fit ml-auto">Add</PrimaryButton>
    </motion.form>
  );
};

export default AddTaskForm;
