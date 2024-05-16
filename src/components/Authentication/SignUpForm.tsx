import { forwardRef, useContext } from "react";
import AuthenticationContext from "../../Contexts/AuthFormsContext";
import FormLabel from "../FormLabel";
import HeaderTitle from "../HeaderTitle";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SignUpValidator from "../../utils/Validation/SignUpValidator";
import { ErrorMessage } from "@hookform/error-message";
import ErrorLabel from "../ErrorLabel";
import { SignUpFormValues } from "../../types/UserAuthenticationTypes";
import PrimaryButton from "../PrimaryButton";
import { useAuth } from "../../Contexts/AuthContext";

const SignUpForm = forwardRef<HTMLDivElement>((props, ref) => {
  const { setFormIndex } = useContext(AuthenticationContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignUpFormValues>();
  const auth = useAuth();
  const password = watch("password");
  const onSubmit = async (data: SignUpFormValues) => {
    auth.signUp(data);
  };
  return (
    <div
      ref={ref}
      className="w-full flex  grow flex-1 flex-col gap-5 max-w-md bg-[#18181C] rounded-lg shadow-md p-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <HeaderTitle title="Sign Up" className="text-2xl font-bold" />
        <div>
          <FormLabel>Full Name</FormLabel>
          <Input
            {...register("fullName", SignUpValidator.fullNameValidator)}
            placeholder="Enter your Full Name"
            className="rounded-sm"
          />
          <ErrorMessage
            errors={errors}
            name="fullName"
            render={({ message }) => {
              return <ErrorLabel>{message}</ErrorLabel>;
            }}
          />
        </div>

        <div>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", SignUpValidator.emailValidator)}
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
            {...register("password", SignUpValidator.passwordValidator)}
            type={"password"}
            placeholder="Enter Your Password"
            className="rounded-sm"
          />
        </div>
        <div>
          <FormLabel>re-enter password</FormLabel>
          <Input
            type={"password"}
            {...register(
              "confirmPassword",
              SignUpValidator.confirmPassword(password)
            )}
            placeholder="Enter Your Password again"
            className="rounded-sm"
          />
          <ErrorMessage
            errors={errors}
            name="confirmPassword"
            render={({ message }) => {
              return <ErrorLabel>{message}</ErrorLabel>;
            }}
          />
        </div>
        <span
          onClick={() => setFormIndex(0)}
          className={"text-sm cursor-pointer text-blue-200 underline"}
        >
          i have account
        </span>
        <PrimaryButton type="submit" className="py-2">
          Sign up
        </PrimaryButton>
      </form>
    </div>
  );
});

export const SignUpFormWithMotion = motion(SignUpForm);
export default SignUpForm;
