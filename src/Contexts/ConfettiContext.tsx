import { createContext, FC, PropsWithChildren, useState } from "react";
import Confetti from "react-confetti";
import useWindowSizes from "../components/Hooks/useWindowSize";

interface ConfettiContextProps {
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isRunning: boolean;
}
const ConfettiContext = createContext<ConfettiContextProps>({
  isRunning: false,
  setIsRunning: () => {},
});
export const ConfettiProvider: FC<PropsWithChildren> = ({ children }) => {
  const { width, height } = useWindowSizes();
  const [isRunning, setIsRunning] = useState(false);
  return (
    <ConfettiContext.Provider value={{ isRunning, setIsRunning }}>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={isRunning ? 500 : 0}
        recycle={isRunning}
      />
      {children}
    </ConfettiContext.Provider>
  );
};
export default ConfettiContext;
