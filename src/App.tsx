import React, { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthenticationForms from "./pages/AuthenticationForms";
import { AuthenticationFormsProvider } from "./Contexts/AuthFormsContext";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const LazyHomePage = lazy(() => import("./pages/HomePage"));
const App: React.FC = () => {
  return (
    <div className=" min-h-screen   text-white  bg-primary ">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<LazyHomePage />} />
        </Route>
        <Route
          path="/authentication"
          element={
            <AuthenticationFormsProvider>
              <AuthenticationForms />
            </AuthenticationFormsProvider>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
