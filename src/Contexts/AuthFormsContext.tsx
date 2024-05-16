import { createContext, FC, PropsWithChildren, useState } from "react";

interface AuthenticationFormsProps {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formIndex: number;
}
const AuthenticationContext = createContext<AuthenticationFormsProps>({
  setFormIndex: () => {},
  formIndex: 0,
});
export const AuthenticationFormsProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [formIndex, setFormIndex] = useState<number>(0);

  return (
    <AuthenticationContext.Provider value={{ formIndex, setFormIndex }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationContext;
