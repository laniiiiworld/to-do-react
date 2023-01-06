import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <form className={styles.footer}>
      <input type='text' className={styles.input} placeholder='ADD Todo' />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
}
