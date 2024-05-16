import axios from "axios";
import { SignInFormValues } from "../../types/UserAuthenticationTypes";

export const SignIn = async (values: SignInFormValues) => {
  const response = await axios.post("/auth/v1/signIn", { ...values });
  return response;
};
