import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import PrimaryButton from "../components/PrimaryButton";

interface MultiFormsProps {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  formIndex: number;
  isLastForm: boolean;
  isFirstForm: boolean;
  next: () => void;
  prev: () => void;
}
const MultiFormsContext = createContext<MultiFormsProps>({
  setFormIndex: () => {},
  formIndex: 0,
  next: () => {},
  prev: () => {},
  isLastForm: false,
  isFirstForm: true,
});
interface MultiFormsProviderProps extends PropsWithChildren {
  Forms: JSX.Element[];
}
export const MultiFormsProvider: FC<MultiFormsProviderProps> = ({
  children,
  Forms,
}) => {
  const [formIndex, setFormIndex] = useState<number>(0);

  const next = () => {
    if (formIndex < Forms.length - 1) setFormIndex(formIndex + 1);
  };
  const prev = () => {
    if (formIndex > 0) setFormIndex(formIndex - 1);
  };
  const isLastForm = Forms.length - 1 === formIndex;
  const isFirstForm = 0 === formIndex;
  return (
    <MultiFormsContext.Provider
      value={{ formIndex, setFormIndex, isLastForm, isFirstForm, next, prev }}
    >
      {Forms[formIndex]}
      {children}
    </MultiFormsContext.Provider>
  );
};

export const useMultiFormsContext = () => {
  return useContext(MultiFormsContext);
};
export const NextButton: FC<PropsWithChildren> = ({ children }) => {
  const { next, isLastForm } = useMultiFormsContext();
  if (isLastForm) return null;
  return (
    <PrimaryButton onClick={next} className="ml-auto">
      {children}
    </PrimaryButton>
  );
};
export const PrevButton: FC<PropsWithChildren> = ({ children }) => {
  const { prev, isFirstForm } = useMultiFormsContext();
  if (isFirstForm) return null;
  return (
    <PrimaryButton onClick={prev} className="mr-auto">
      {children}
    </PrimaryButton>
  );
};
