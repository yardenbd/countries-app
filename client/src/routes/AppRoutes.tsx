import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Table } from "../components/Table/Table";

export const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/countries" element={<Table />} />
      </Routes>
    </Router>
  );
};
