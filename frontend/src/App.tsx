import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
