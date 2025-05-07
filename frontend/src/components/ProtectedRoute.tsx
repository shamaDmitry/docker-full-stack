import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  console.log("user", user);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
