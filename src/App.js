import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import ApartmentDetailPage from "./pages/ApartmentDetailPage";
import ApartmentEditPage from "./pages/ApartmentEditPage";
import AddApartmentPage from "./pages/AddApartmentPage"
//import AddApartmentPage from "./pages/AddApartmentPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/apartments/:apartmentId/edit" element={<ApartmentEditPage />} />
        <Route exact path="/apartments/:apartmentId" element={<ApartmentDetailPage />} />
        <Route exact path="/apartments/add-apartment" element={<AddApartmentPage />} />
        <Route exact path="/" element={<ApartmentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
