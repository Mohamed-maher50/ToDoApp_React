import HeaderTitle from "./HeaderTitle";
import SidebarLink from "./SidebarLink";
import { BsFillFolderFill } from "react-icons/bs";
import { FaStar, FaCalendarWeek } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import ProjectsLayout from "./ProjectsLayout";
import { useSearchParams } from "react-router-dom";
import { FC, HTMLAttributes } from "react";
import cn from "../utils/cn";
const GetCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");

  // Format the date as "YYYY-MM-DD"
  return `${year}-${month}-${day}`;
};
const links = [
  {
    label: "all",
    action: "",
    value: "",
    Icon: BsFillFolderFill,
  },
  {
    label: "starred",
    action: "started",
    value: "true",
    Icon: FaStar,
  },
  {
    label: "today",
    action: "mustCompleteDate",
    value: `${GetCurrentDate()}`,
    Icon: MdNotificationImportant,
  },
];
const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [params, setSearchParams] = useSearchParams();
  const onClick = (key: string, value: string) => {
    setSearchParams({ [key]: value });
  };
  return (
    <div className={cn(`h-full  grid gap-4`, className)}>
      <HeaderTitle title="Filters" />
      <ul className="pl-3 gap-3 flex flex-col">
        {links.map((link, index) => {
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
        })}
      </ul>

      <ProjectsLayout />
    </div>
  );
};

export default Sidebar;
