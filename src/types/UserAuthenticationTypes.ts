export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

export interface User {
  TOKEN: string;
  user: { fullName: string; email: string };
}
export interface SignInFormValues {
  email: string;
  password: string;
}
