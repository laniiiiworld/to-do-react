import React from 'react';
import { BsTrash, BsTrashFill } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo }) {
  return (
    <li className={styles.item}>
      <input id='checkbox' type='checkbox' className={styles.checkbox} />
      <span className={styles.todo}>{todo}</span>
      <button className={styles.trashBtn}>
        <BsTrashFill />
      </button>
    </li>
  );
}
