import { AxiosResponse } from "axios";
import {
  createContext,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import {
  deleteProject as deleteProjectApi,
  updateProject as updateProjectApi,
} from "../../api/ProjectsApi";
import { ProjectType } from "../../types/ProjectType";

import cn from "../../utils/cn";
import CustomInput from "../Input";
import PrimaryButton from "../PrimaryButton";

interface ProjectCardProps {}
interface ProjectCardContextTypes {
  isEditAble: boolean;
  setIsEditAble: React.Dispatch<React.SetStateAction<boolean>>;
  deleteProject: (id: string) => Promise<AxiosResponse<ProjectType, any>>;
  updateProject: (
    id: string,
    values: Partial<ProjectType>
  ) => Promise<AxiosResponse<ProjectType, any>>;
}
export const ProjectCardContext = createContext<ProjectCardContextTypes>({
  isEditAble: false,
  setIsEditAble: () => {},
  deleteProject: (id) => {
    return deleteProjectApi(id);
  },
  updateProject: (id, values) => {
    return updateProjectApi(id, values);
  },
});
const Root = forwardRef<
  HTMLDivElement,
  ProjectCardProps & PropsWithChildren & HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const [isEditAble, setIsEditAble] = useState(false);
  const deleteProject = async (id: string) => {
    const res = await deleteProjectApi(id);
    return res;
  };

  const updateProject = async (id: string, values: Partial<ProjectType>) => {
    return updateProjectApi(id, values);
  };
  return (
    <ProjectCardContext.Provider
      value={{ isEditAble, setIsEditAble, deleteProject, updateProject }}
    >
      <div
        ref={ref}
        {...props}
        className={cn(
          `flex cursor-pointer w-full  hover:bg-[#2F2D36] hover:shadow-md hover:scale-95 active:scale-95 p-2 rounded-lg duration-500 `,
          className
        )}
      >
        {children}
      </div>
    </ProjectCardContext.Provider>
  );
});
const Form = forwardRef<HTMLFormElement, HTMLAttributes<HTMLFormElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("flex items-center w-full", className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const { isEditAble } = useContext(ProjectCardContext);
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0",
          isEditAble && "hidden"
        )}
      ></div>
      <CustomInput
        ref={ref}
        disabled={!isEditAble}
        className={cn("h-5  grow shadow-none", className)}
        {...props}
      />
    </div>
  );
});
const ToggleButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & PropsWithChildren
>(({ className, children, ...props }, ref) => {
  const { isEditAble, setIsEditAble } = useContext(ProjectCardContext);
  return (
    <PrimaryButton
      ref={ref}
      onClick={() => setIsEditAble(!isEditAble)}
      className={cn("h-5 bg-blue-200 grow shadow-none", className)}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
});
export { Input, Root, ToggleButton, Form };
