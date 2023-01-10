import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Footer.module.css';

export default function Footer({ addItem }) {
  const { darkMode } = useContext(DarkModeContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addItem(text.trim());
    setText('');
  };
  const handleChange = (e) => setText(e.target.value);

  return (
    <form className={`${styles.footer} ${darkMode ? styles.dark : ''}`} onSubmit={handleSubmit}>
      <input type='text' className={styles.input} placeholder='ADD Todo' value={text} onChange={handleChange} />
      <button className={styles.addBtn} title='add button'>
        Add
      </button>
    </form>
  );
}
