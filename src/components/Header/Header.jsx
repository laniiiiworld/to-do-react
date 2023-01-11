import React from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, applyFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode();
  };

  const handelFiltersClick = (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    applyFilter(e.target.textContent);
  };

  return (
    <header className={styles.header}>
      <button className={styles.theme} onClick={handleDarkMode} title={`Switch to ${darkMode ? 'light' : 'dark'} mode button`}>
        {darkMode ? <BsSun /> : <BsMoonFill />}
      </button>
      <ul className={styles.filters} onClick={handelFiltersClick}>
        {filters.map((value, index) => (
          <li key={index}>
            <button className={`${styles.filter} ${value === filter ? styles.selected : ''}`} title={value}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
