import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import cn from "../utils/cn";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", children, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "text-gray-400 w-full block placeholder:text-sm pl-3 placeholder:text-slate-400 placeholder:opacity-40  bg-[#2F2D36] py-1 focus:outline-none rounded-lg shadow-md ",
        className
      )}
      {...props}
    />
  );
});

export default Input;
