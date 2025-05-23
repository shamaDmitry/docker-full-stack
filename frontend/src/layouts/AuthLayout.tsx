import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default AuthLayout;
