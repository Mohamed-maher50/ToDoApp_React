import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { createNewProjects } from "../api/ProjectsApi";
import { useProjectsContext } from "../Contexts/ProjectsContext";

import HeaderTitle from "./HeaderTitle";
import Input from "./Input";
const inputVariants = {
  initial: {
    y: -10,
    opacity: 0,
    scale: 0,
  },
  exit: {
    y: -10,
    opacity: 0,
    scale: 0,
    transition: {
      delay: 0.2,
    },
  },
  animate: {
    y: 1,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};
const MotionInput = motion(Input);
const CreateProjectForm = () => {
  const { setProjects } = useProjectsContext();
  const [shouldShowInput, setShouldShowInput] = useState(false);
  const projectName = useRef<HTMLInputElement | null>(null);
  const createNewProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await createNewProjects(projectName.current?.value);
    if (data.status === 200 && projectName.current) {
      projectName.current.value = "";
      setProjects((prev) => {
        if (!prev) return null;
        return [{ ...data.data.data }, ...prev];
      });
    }
  };
  return (
    <form onSubmit={createNewProject}>
      <div className="flex  items-center justify-between">
        <HeaderTitle title="Projects" />
        <FiPlus
          onClick={() => setShouldShowInput(!shouldShowInput)}
          className="text-3xl cursor-pointer hover:scale-110 hover:rotate-180 active:scale-95 duration-500 font-body text-[#524e5e]"
        />
      </div>
      <AnimatePresence>
        {shouldShowInput && (
          <MotionInput
            ref={projectName}
            variants={inputVariants}
            initial={"initial"}
            exit={"exit"}
            animate={"animate"}
            placeholder="Enter project name"
            spellCheck={false}
            className="  text-gray-400   placeholder:opacity-100"
            autoFocus={true}
          />
        )}
      </AnimatePresence>
    </form>
  );
};

export default CreateProjectForm;
