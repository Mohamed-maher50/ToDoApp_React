import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "http://localhost:5000";
console.log(import.meta.env.VITE_URL as string);
export const UpdateToken = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};
export const DeleteToken = () => {
  axios.defaults.headers.Authorization = null;
};
// errorComposer will compose a handleGlobally function
interface ErrorComposer {
  ValidationError?: [
    {
      msg: string;
    }
  ];

  msg?: string;
}
const errorComposer = (error: AxiosError<ErrorComposer>) => {
  const statusCode = error.response ? error.response.status : null;
  if (statusCode === 400) {
    if (error.response?.data && error.response?.data?.ValidationError) {
      error.response.data.ValidationError.map(({ msg }) =>
        toast.error(msg, {
          theme: "dark",
        })
      );
    }
  }
  if (error.response?.data.msg) {
    toast.error(error.response?.data.msg, {
      theme: "dark",
    });
  }
};

axios.interceptors.response.use(undefined, function (error) {
  error.handleGlobally = errorComposer(error);

  return Promise.reject(error);
});
