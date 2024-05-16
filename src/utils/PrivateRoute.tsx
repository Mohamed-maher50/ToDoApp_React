import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
const PrivateRoute = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to={"/authentication"} />;
  return <Outlet />;
};

export default PrivateRoute;
