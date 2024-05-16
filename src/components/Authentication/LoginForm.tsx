import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useContext } from "react";
import AuthenticationContext from "../../Contexts/AuthFormsContext";
import FormLabel from "../FormLabel";
import HeaderTitle from "../HeaderTitle";
import Input from "../Input";
import { useForm } from "react-hook-form";
import ErrorLabel from "../ErrorLabel";
import { ErrorMessage } from "@hookform/error-message";
import LoginValidator from "../../utils/Validation/LoginValidator";
import PrimaryButton from "../PrimaryButton";
import { SignInFormValues } from "../../types/UserAuthenticationTypes";
import { useAuth } from "../../Contexts/AuthContext";
const LoginForm = forwardRef<HTMLDivElement>((props, ref) => {
  const { setFormIndex } = useContext(AuthenticationContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>();
  const auth = useAuth();
  const onSubmit = async (data: SignInFormValues) => {
    auth.logIn(data);
  };
  return (
    <div
      ref={ref}
      className="w-full flex  grow flex-1 flex-col gap-5 max-w-md bg-[#18181C] rounded-lg shadow-md p-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <HeaderTitle title="Login" className="text-2xl font-bold" />
        <div>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", LoginValidator.emailValidator)}
            placeholder="Enter your email address"
            className="rounded-sm"
          />

          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => {
              return <ErrorLabel>{message}</ErrorLabel>;
            }}
          />
        </div>
        <div>
          <FormLabel>password</FormLabel>
          <Input
            {...register("password", LoginValidator.passwordValidator)}
            type={"password"}
            placeholder="Enter Your Password"
            className="rounded-sm"
          />

          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => {
              return <ErrorLabel>{message}</ErrorLabel>;
            }}
          />
        </div>
        <span
          onClick={() => {
            setFormIndex(1);
          }}
          className={"text-sm w-fit cursor-pointer text-blue-200 underline"}
        >
          i don't have account
        </span>
        <PrimaryButton type="submit" className="py-2">
          Login
        </PrimaryButton>
      </form>
    </div>
  );
});
export const LoginFormWithMotion = motion(LoginForm);
export default LoginForm;
