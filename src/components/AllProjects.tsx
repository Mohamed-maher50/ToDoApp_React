import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { deleteProject, updateProject } from "../api/ProjectsApi";
import { useProjectsContext } from "../Contexts/ProjectsContext";
import { ProjectType } from "../types/ProjectType";
import HeaderTitle from "./HeaderTitle";
import { ProjectCardWithMotion } from "./Projects/ProjectCard";
import * as ProjectCard from "../components/test/ProjectCard";
import PrimaryButton from "./PrimaryButton";
import ProjectToggleButtons from "./Projects/ProjectToggleButtons";
import ForEach from "../utils/ForEach";
const AllProjects = () => {
  const { Projects, setProjects } = useProjectsContext();

  const [params, setParams] = useSearchParams();
  const projectOnClick = (id: string) => {
    setParams((prev) => {
      return {
        ...prev,
        project: id,
      };
    });
  };

  const onDeleteProject = async (id: string) => {
    const res = await deleteProject(id);
    if (res.status === 200) {
      setProjects((prev) => {
        if (!prev) return null;
        return prev.filter((p) => {
          return p._id != id;
        });
      });
    }
  };

  const onEditProject = async (id: string, values: Partial<ProjectType>) => {
    try {
      const res = await updateProject(id, values);
      setProjects((prev) => {
        if (!prev) return null;
        return prev.map((p) => {
          if (p._id === id) return { ...p, ...values };
          return p;
        });
      });
      if (res.status === 202) return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <AnimatePresence>
        <ForEach
          items={Projects || []}
          render={(p) => {
            return (
              <ProjectCardWithMotion
                exit={{
                  scale: 2,
                  opacity: 0,
                }}
                onEdit={onEditProject}
                onDelete={onDeleteProject}
                {...p}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                isActive={p._id === params.get("project")?.trim()}
                onClick={() => projectOnClick(p._id)}
                key={p._id}
                className="flex justify-between"
              />
            );
          }}
        />
      </AnimatePresence>

      {Projects?.length === 0 && (
        <HeaderTitle className="text-sm text-center capitalize text-gray-400">
          {"not found any Projects"}
        </HeaderTitle>
      )}
    </>
  );
};

export default AllProjects;
