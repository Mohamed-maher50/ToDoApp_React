import { AnimatePresence, motion, Variants } from "framer-motion";
import { useContext } from "react";
import { LoginFormWithMotion } from "../components/Authentication/LoginForm";
import AuthenticationContext from "../Contexts/AuthFormsContext";
import { SignUpFormWithMotion } from "../components/Authentication/SignUpForm";
const LoginFormVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
  },
};
const SignUpFormVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: "200%",
  },
};

const AuthenticationForms = () => {
  const { formIndex } = useContext(AuthenticationContext);

  const AuthForms = [
    <LoginFormWithMotion
      key={2}
      variants={LoginFormVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    />,
    <SignUpFormWithMotion
      variants={SignUpFormVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    />,
  ];

  return (
    <section className="container mx-auto overflow-hidden">
      <motion.div className="min-h-screen flex items-center justify-center">
        <AnimatePresence>{AuthForms[formIndex]}</AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AuthenticationForms;
