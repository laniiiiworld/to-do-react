import React, { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer({ addItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  };
  const handleChange = (e) => setText(e.target.value);

  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input type='text' className={styles.input} placeholder='ADD Todo' value={text} onChange={handleChange} />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
}
