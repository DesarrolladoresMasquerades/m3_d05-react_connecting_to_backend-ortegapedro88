import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import ApartmentDetailPage from "./pages/ApartmentDetailPage";
//import AddApartmentPage from "./pages/AddApartmentPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<ApartmentsPage />} />
        <Route exact path="/apartments/:apartmentId" element={<ApartmentDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
