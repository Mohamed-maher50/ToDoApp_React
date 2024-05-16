import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfettiProvider } from "./Contexts/ConfettiContext";
import "react-toastify/dist/ReactToastify.css";
import "./api/AxiosConfig";
import { AuthProvider } from "./Contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfettiProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </ConfettiProvider>
);
