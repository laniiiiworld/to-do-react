import React, { useState } from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header({ applyFilter }) {
  const [icons, setIcons] = useState([
    { isClicked: true, name: 'All', type: 'A' },
    { isClicked: false, name: 'Active', type: 'N' },
    { isClicked: false, name: 'Completed', type: 'Y' },
  ]);

  const handelIconsClick = (e) => {
    if (e.target.tagName !== 'LI') return;
    const type = e.target.dataset.type;
    applyFilter(type);
    setIcons([...icons].map((icon) => ({ ...icon, isClicked: icon.type === type })));
  };

  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <BsSun />
        {/* <BsMoonFill /> */}
      </div>
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
