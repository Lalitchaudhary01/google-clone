// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"; // Import your components for each route

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MyRoutes;
