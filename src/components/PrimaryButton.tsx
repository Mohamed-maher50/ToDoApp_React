import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import cn from "../utils/cn";
interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & PrimaryButtonProps
>(({ className, value, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "bg-gradient-to-br from-lightSecandary  to-secandary  px-6 py-1 shadow-sm shadow-black hover:scale-105 duration-300 ease-in-out active:scale-100 rounded-full",
        className
      )}
      value={value}
      {...props}
    >
      {children || value}
    </button>
  );
});

export default PrimaryButton;
