import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
