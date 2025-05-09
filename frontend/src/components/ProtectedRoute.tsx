import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("user");
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
