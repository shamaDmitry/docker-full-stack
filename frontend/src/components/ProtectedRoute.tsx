import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthStore();

  console.log("user", user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
