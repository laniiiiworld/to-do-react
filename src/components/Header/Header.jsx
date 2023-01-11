import React, { useState } from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ applyFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [icons, setIcons] = useState([
    { isClicked: true, name: 'All', type: 'A' },
    { isClicked: false, name: 'Active', type: 'N' },
    { isClicked: false, name: 'Completed', type: 'Y' },
  ]);

  const handleDarkMode = () => {
    toggleDarkMode();
  };

  const handelIconsClick = (e) => {
    if (e.target.tagName !== 'LI') return;
    const type = e.target.dataset.type;
    applyFilter(type);
    setIcons([...icons].map((icon) => ({ ...icon, isClicked: icon.type === type })));
  };

  return (
    <header className={styles.header}>
      <button className={styles.theme} onClick={handleDarkMode} title={`Switch to ${darkMode ? 'light' : 'dark'} mode button`}>
        {darkMode ? <BsSun /> : <BsMoonFill />}
      </button>
      <ul className={styles.icons} onClick={handelIconsClick}>
        {icons.map((icon) => (
          <li key={icon.type} className={`${styles.icon} ${icon.isClicked ? styles.selected : ''}`} data-type={icon.type}>
            {icon.name}
          </li>
        ))}
      </ul>
    </header>
  );
}
