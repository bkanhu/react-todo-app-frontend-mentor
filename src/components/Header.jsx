import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // localhost.setItem('theme', isDarkMode)
  return (
    <section className="header">
      <div className="header-container">
        <h1 className="header-title">TODO</h1>

        <button className="header-btn" onClick={toggleTheme}>
          {' '}
          {isDarkMode ? (
            <img src="/light.svg" alt="Light Icon" className="svg-logo" />
          ) : (
            <img src="/dark.svg" alt="Dark Icon" className="svg-logo" />
          )}
        </button>
      </div>
    </section>
  );
}
