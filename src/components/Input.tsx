import { forwardRef, InputHTMLAttributes } from "react";
import cn from "../utils/cn";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", children, ...props }, ref) => {
  return (
    <div className="w-full relative">
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0",
          !props.disabled && "hidden"
        )}
      ></div>
      <input
        ref={ref}
        type={type}
        className={cn(
          "text-gray-400 w-full block placeholder:text-sm pl-3 placeholder:text-slate-400 placeholder:opacity-40  bg-[#2F2D36] py-1 focus:outline-none rounded-lg shadow-md ",
          className
        )}
        {...props}
      />
    </div>
  );
});

export default Input;
