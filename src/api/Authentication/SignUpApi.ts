import axios from "axios";
import { SignUpFormValues } from "../../types/UserAuthenticationTypes";
export const SignUp = async (values: SignUpFormValues) => {
  const response = await axios.post("/auth/v1/signUp", { ...values });
  return response;
};
