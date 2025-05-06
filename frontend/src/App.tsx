import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { RegisterPage } from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AuthLayout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
