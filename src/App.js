import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWithOtp from "./pages/LoginWithOtp";
import LandingPage from "./pages/LandingPage";
import SelectableGridPage from "./pages/selectable-grid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="otp-login" element={<LoginWithOtp />} />
        <Route path="selectable-grid" element={<SelectableGridPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
