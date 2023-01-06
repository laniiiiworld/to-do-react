import React from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <BsSun />
        {/* <BsMoonFill /> */}
      </div>
      <ul className={styles.icons}>
        <li className={`${styles.icon} ${styles.selected}`}>All</li>
        <li className={styles.icon}>Active</li>
        <li className={styles.icon}>Completed</li>
      </ul>
    </header>
  );
}
