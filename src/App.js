// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="app-container">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Outlet /> {/* Use Outlet to render nested routes */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
