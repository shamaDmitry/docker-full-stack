import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { RegisterPage } from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import { useAuthStore } from "./store/useAuthStore";
import { MainLayout } from "./layouts/MainLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const { user } = useAuthStore();

  return (
    // <>
    //   <Routes>
    //     <Route element={<AuthLayout />} />
    //     <Route index path="login" element={<LoginPage />} />
    //     <Route path="register" element={<RegisterPage />} />
    //   </Routes>

    //   <Toaster />
    // </>

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
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          >
            {/* <Route index element={<EmpyChat />} /> */}
            {/* <Route path="chat/:userId" element={<ChatPage />} /> */}
          </Route>
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
