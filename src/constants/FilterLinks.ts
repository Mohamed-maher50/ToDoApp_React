import { BsFillFolderFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import GetCurrentDate from "../utils/GetCurrentDate";

export default [
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
