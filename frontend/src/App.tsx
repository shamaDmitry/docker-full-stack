import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { RegisterPage } from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import { useAuthStore } from "./store/useAuthStore";
import { MainLayout } from "./layouts/MainLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import DashboardPage from "./pages/protected/DashboardPage";

function App() {
  const { user } = useAuthStore();

  return (
    <div className="h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="register"
            element={!user ? <RegisterPage /> : <Navigate to="/" />}
          />
          <Route
            path="login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
