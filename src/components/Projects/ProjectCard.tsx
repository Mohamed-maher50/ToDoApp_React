import { motion } from "framer-motion";
import {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ProjectType } from "../../types/ProjectType";
import cn from "../../utils/cn";
import Input from "../Input";
import { MdOutlineDone } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

interface ProjectCardProps extends ProjectType {
  isActive?: boolean;
  onDelete: (id: string) => void;
  onEdit?: (id: string, value: Partial<ProjectType>) => void;
  onClick?: () => void;
}
const ProjectCard = forwardRef<
  HTMLDivElement,
  ProjectCardProps & PropsWithChildren & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      isActive = false,
      onClick,
      className,
      onEdit,
      onDelete,
      ...props
    },
    ref
  ) => {
    const [isEditAble, setIsEditAble] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (isEditAble) inputRef.current?.focus();
    }, [isEditAble]);

    return (
      <div
        ref={ref}
        {...props}
        onClick={() => onClick && onClick()}
        className={cn(
          `flex cursor-pointer w-full  hover:bg-[#2F2D36] hover:shadow-md hover:scale-95 active:scale-95 p-2 rounded-lg duration-500 `,
          className,
          isActive && "bg-primary hover:bg-gray-800"
        )}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (inputRef.current?.value && onEdit)
              onEdit(props._id, {
                projectName: inputRef.current.value,
              });

            if (isEditAble) setIsEditAble(false);
          }}
          className="flex items-center"
        >
          <BsFillFolderFill />
          <Input
            ref={inputRef}
            defaultValue={props.projectName}
            className={cn("h-5 bg-transparent shadow-none", isEditAble)}
            disabled={!isEditAble}
          />
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
              <FaTrash
                className="text-red-200"
                onClick={() => {
                  onDelete(props._id);
                }}
              />
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export const ProjectCardWithMotion = motion(ProjectCard);

export default ProjectCard;
