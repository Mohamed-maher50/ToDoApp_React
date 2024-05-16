import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../utils/cn";

const CardContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren & HTMLAttributes<HTMLDivElement>
>(({ children, className = "", ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "bg-card rounded-xl  h-full px-5  shadow-2xl py-4 shadow-primary",
        className
      )}
    >
      {children}
    </div>
  );
});

export default CardContainer;
