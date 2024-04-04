import { Navigate } from "react-router-dom";
import { FCC } from "../@types/types";

const ProtectedRoute: FCC = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
