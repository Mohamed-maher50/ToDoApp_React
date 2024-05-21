import { Variants } from "framer-motion";
import AddTaskForm from "../components/AddTaskForm";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import { AllTasksWithMotion } from "../components/ShowTask";
import Sidebar from "../components/Sidebar";
import WithDivider from "../components/WithDivider";
import {
  MultiFormsProvider,
  NextButton,
  PrevButton,
} from "../Contexts/MultiForms";
const AllTasksWithMotionVariants: Variants = {
  initial: {
    x: "-100%",
    top: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    top: 0,
    opacity: 1,
  },
  exit: {
    x: "100%",
    top: 0,
    opacity: 0,
  },
};
const HomePage = () => {
  const Forms = [
    <AllTasksWithMotion
      variants={AllTasksWithMotionVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    />,
    <AddTaskForm />,
  ];

  return (
    <div className="  grow min-h-screen flex pt-28 justify-center">
      <section className="container mx-auto h-full flex flex-col gap-3 ">
        <Navbar />
        <WithDivider
          RightAttributes={{
            className: "max-md:hidden",
          }}
        >
          <CardContainer>
            <Sidebar />
          </CardContainer>
          <CardContainer className="flex min-h-[400px] overflow-hidden flex-col">
            <MultiFormsProvider Forms={Forms}>
              <div className="flex mt-auto  justify-between my-3">
                <PrevButton>Back</PrevButton>
                <NextButton> New Task</NextButton>
              </div>
            </MultiFormsProvider>
          </CardContainer>
        </WithDivider>
      </section>
    </div>
  );
};

export default HomePage;
