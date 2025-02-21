import React from 'react';
import { useDarkMode } from"./hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Players</h1>
      <div className= "flex">
      <h2 data-testid="dark">Dark Mode {darkMode ? 'On' : 'Off'} </h2>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        /> .
      </div>
      </div>
    </nav>
  );
};

export default Navbar;