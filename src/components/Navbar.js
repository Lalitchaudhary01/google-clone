import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => (
  <div className="nav-container">
    <div className="nav-bar">
      <Link to="/">
        <p className="logo">Goggle 🔎</p>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="dark-btn"
      >
        {darkTheme ? "💡 Light" : "🌙 Dark"}
      </button>
      <Search />
    </div>
  </div>
);

export default Navbar;
