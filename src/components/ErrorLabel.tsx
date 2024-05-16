import { motion } from "framer-motion";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../utils/cn";

const ErrorLabel = forwardRef<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement> & PropsWithChildren
>(({ className, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className={cn("text-sm text-red-300", className)}
    >
      {children}
    </label>
  );
});
export const ErrorLabelWithMotion = motion(ErrorLabel);
export default ErrorLabel;
