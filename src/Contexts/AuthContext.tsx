import axios from "axios";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../api/Authentication/SignInApi";
import { SignUp } from "../api/Authentication/SignUpApi";
import { DeleteToken, UpdateToken } from "../api/AxiosConfig";
import {
  SignInFormValues,
  SignUpFormValues,
  User,
} from "../types/UserAuthenticationTypes";

interface AuthContextTypes {
  user: null | Omit<User, "TOKEN">;
  token: null | string;
  logOut: () => void;
  signUp: (inputs: SignUpFormValues) => void;
  logIn: (user: SignInFormValues) => void;
}
const AuthContext = createContext<AuthContextTypes>({
  user: null,
  token: null,
  logOut: () => {},
  signUp: () => {},
  logIn: () => {},
});
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<null | Omit<User, "TOKEN">>(null);
  const [token, setToken] = useState<null | string>(null);
  const navigate = useNavigate();
  console.log(axios.defaults.headers.Authorization);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
    const storageToken = localStorage.getItem("token");
    if (storageToken) setToken(storageToken);
  }, []);
  useEffect(() => {
    if (user && token) {
      token && UpdateToken(token);
      navigate("/");
    }
  }, [user, token]);
  const logIn = async (inputs: SignInFormValues) => {
    const res = await SignIn(inputs);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.TOKEN);
      setToken(() => res.data.TOKEN);
      UpdateToken(res.data.TOKEN);
      delete res.data.TOKEN;
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(() => res.data);
      navigate("/");
    }
  };
  const signUp = async (inputs: SignUpFormValues) => {
    const res = await SignUp(inputs);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.TOKEN);
      setToken(res.data.TOKEN);
      delete res.data.TOKEN;
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      navigate("/authentication");
    }
  };
  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    DeleteToken();
    navigate("/authentication");
  };
  return (
    <AuthContext.Provider value={{ user, token, logOut, signUp, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
