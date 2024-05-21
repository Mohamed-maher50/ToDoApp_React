import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { ProjectCardContext } from "../test/ProjectCard";

const ProjectToggleButtons = ({ _id }: { _id: string }) => {
  const { isEditAble, setIsEditAble, deleteProject } =
    useContext(ProjectCardContext);
  console.log(_id);
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <button type={isEditAble ? "button" : "submit"}>
        {isEditAble ? (
          <MdOutlineDone
            onClick={() => setIsEditAble(false)}
            className="text-gray-500"
          />
        ) : (
          <FaEdit
            onClick={() => setIsEditAble(true)}
            className="hover:scale-125 duration-300"
          />
        )}
      </button>
      <button type="button">
        <FaTrash onClick={() => deleteProject(_id)} className="text-red-200" />
      </button>
    </div>
  );
};

export default ProjectToggleButtons;
