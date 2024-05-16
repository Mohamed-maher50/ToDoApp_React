export default {
  passwordValidator: {
    required: true,
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
  },
  emailValidator: {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "invalid email address",
    },
  },
};
