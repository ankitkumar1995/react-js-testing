import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserListing from "./components/users/UserListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
