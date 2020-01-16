import React from 'react';
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {

  const [darkMode, setDarkMode] = useTheme();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);   

    console.log(`toggled dark mode`)
  };


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
