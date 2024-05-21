import HeaderTitle from "./HeaderTitle";
import SidebarLink from "./SidebarLink";
import { BsFillFolderFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import ProjectsLayout from "./ProjectsLayout";
import { useSearchParams } from "react-router-dom";
import { FC, HTMLAttributes } from "react";
import cn from "../utils/cn";
import FilterLinks from "../constants/FilterLinks";
import ForEach from "../utils/ForEach";

const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [params, setSearchParams] = useSearchParams();
  const onClick = (key: string, value: string) => {
    setSearchParams({ [key]: value });
  };
  return (
    <div className={cn(`h-full  grid gap-4`, className)}>
      <HeaderTitle title="Filters" />
      <ul className="pl-3 gap-3 flex flex-col">
        <ForEach
          items={FilterLinks}
          render={(link, index) => {
            return (
              <li key={index}>
                <SidebarLink
                  isActive={
                    params.has(link.action) ||
                    (params.toString() == "" && index === 0)
                  }
                  onClick={() => onClick(link.action, link.value)}
                  className={"flex items-center gap-2 "}
                >
                  <link.Icon />
                  {link.label}
                </SidebarLink>
              </li>
            );
          }}
        />
      </ul>

      <ProjectsLayout />
    </div>
  );
};

export default Sidebar;
