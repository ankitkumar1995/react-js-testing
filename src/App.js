import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserListing from "./components/users/UserListing";
import AddAndEditForm from "./components/users/AddAndEditForm";
import PujaSection from "./PujaSection";
import img1 from "./images/shrikrishna.jpg";
import PujaSliderSection from "./PujaSliderSection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListing />} />
        <Route path="/add-new-user" element={<AddAndEditForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
