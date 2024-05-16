import { forwardRef, HTMLAttributes } from "react";
interface PropsWithChildren extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  title?: string;
}
const HeaderTitle = forwardRef<HTMLSpanElement, PropsWithChildren>(
  ({ children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className="text-lightSecandary text-lg font-semibold "
        {...props}
      >
        {children || props.title}
      </span>
    );
  }
);

export default HeaderTitle;
