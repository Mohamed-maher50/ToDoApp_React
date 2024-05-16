import { forwardRef, HTMLAttributes } from "react";
import cn from "../utils/cn";

interface SidebarLinkProps {
  isActive?: boolean;
}
const SidebarLink = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & SidebarLinkProps
>(({ className = "", children, isActive = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "px-2 duration-500  cursor-pointer hover:scale-105 text-gray-500 text-sm py-1 rounded-md shadow-md",
        className,
        isActive && "bg-gray-100 text-body"
      )}
    >
      {children}
    </div>
  );
});

export default SidebarLink;
