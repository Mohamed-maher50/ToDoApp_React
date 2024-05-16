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
  fullNameValidator: {
    required: true,
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Please enter a valid full name",
    },
  },
  confirmPassword: (password: string) => {
    return {
      required: true,
      validate: (value: string) =>
        value === password || "The passwords do not match",
    };
  },
};
