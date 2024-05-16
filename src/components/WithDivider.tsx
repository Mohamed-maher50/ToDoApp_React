import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../utils/cn";
interface WithDividerProps {
  RightAttributes?: HTMLAttributes<HTMLDivElement> | undefined;
  LeftAttributes?: HTMLAttributes<HTMLDivElement> | undefined;
}
const WithDivider: FC<PropsWithChildren & WithDividerProps> = ({
  children,
  RightAttributes,
  LeftAttributes,
}) => {
  const childArray = React.Children.toArray(children);
  const [Right, Left] = childArray;
  return (
    <div className="flex gap-5">
      <div className={cn("flex-1", RightAttributes?.className)}>{Right}</div>
      <div className={cn("flex-[2]", LeftAttributes?.className)}>{Left}</div>
    </div>
  );
};

export default WithDivider;
