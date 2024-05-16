import { ReactNode } from "react";

function ShowWithCondition({
  children,
  Condition,
}: {
  children: ReactNode;
  Condition: boolean;
}) {
  if (!Condition) return null;
  return <>{children}</>;
}

export default ShowWithCondition;
