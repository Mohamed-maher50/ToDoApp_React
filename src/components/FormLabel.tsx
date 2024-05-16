import { forwardRef, HTMLAttributes } from "react";
import cn from "../utils/cn";

const FormLabel = forwardRef<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>(({ className, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("text-lightSecandary", className)}
      {...props}
    >
      {children}
    </label>
  );
});

export default FormLabel;
