import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { CountriesManagement } from "../screens/CountriesManagement/CountriesManagement";

export const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/countries" element={<CountriesManagement />} />
      </Routes>
    </Router>
  );
};
