import Logo from "./Logo";
import { HiOutlineLogout } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../Contexts/AuthContext";
import { FaFilter, FaFolder } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";
import ProjectsLayout from "./ProjectsLayout";
import * as Popover from "@radix-ui/react-popover";
import FilterLinks from "../constants/FilterLinks";
import SidebarLink from "./SidebarLink";
import { useSearchParams } from "react-router-dom";
interface Project {
  id: number;
  title: string;
  content: string;
}

const Navbar = () => {
  const auth = useAuth();
  const [params, setSearchParams] = useSearchParams();
  const onClick = (key: string, value: string) => {
    setSearchParams({ [key]: value });
  };
  return (
    <div className="flex  justify-between">
      <Logo />

      <div className="flex items-center gap-3">
        <Popover.Root>
          <Popover.Trigger asChild>
            <PrimaryButton className="underline w-fit px-2 py-2 max-md:block hidden rounded-md from-transparent to-transparent bg-gray-800 cursor-pointer">
              <FaFilter className="cursor-pointer" />
            </PrimaryButton>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="rounded p-5 w-[260px] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out shadow-gray-900 shadow-md bg-black  focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <ul className="pl-3 gap-3 flex flex-col">
                {FilterLinks.map((link, index) => {
                  return (
                    <Popover.Close key={index}>
                      <li>
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
                    </Popover.Close>
                  );
                })}
              </ul>
              <Popover.Close
                className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                aria-label="Close"
              >
                <IoClose />
              </Popover.Close>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Dialog.Root>
          <Dialog.Trigger>
            <PrimaryButton className="underline py-2 max-md:block hidden rounded-md from-transparent to-transparent bg-gray-800 cursor-pointer">
              <FaFolder />
            </PrimaryButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black  data-[state=open]:animate-fade-in fixed inset-0 data-[state=closed]:animate-fade-out" />
            <Dialog.Content className=" data-[state=open]:animate-fade-in animation-delay  p-10 fixed  top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#2a2a31] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <ProjectsLayout />
              <Dialog.Close asChild>
                <button
                  className="text-white text-xl hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <IoClose />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <PrimaryButton className="px-4 flex rounded-md items-center py-2">
          <HiOutlineLogout
            className="text-xl font-extrabold"
            onClick={auth.logOut}
          />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
