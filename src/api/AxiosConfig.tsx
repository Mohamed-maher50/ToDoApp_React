import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000";

export const UpdateToken = (token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};
export const DeleteToken = () => {
  axios.defaults.headers.Authorization = null;
};
// errorComposer will compose a handleGlobally function
interface ErrorComposer {
  errors: [
    {
      msg: string;
      felid: string;
    }
  ];
}
const errorComposer = (error: AxiosError<ErrorComposer>) => {
  const statusCode = error.response ? error.response.status : null;

  if (statusCode === 400) {
    if (error.response?.data) {
      error.response.data.errors.map((err) =>
        toast.error(err.msg, {
          theme: "dark",
        })
      );
    }
  }
};

axios.interceptors.response.use(undefined, function (error) {
  error.handleGlobally = errorComposer(error);

  return Promise.reject(error);
});
