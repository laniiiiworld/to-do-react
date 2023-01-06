import React from 'react';
import { BsTrash, BsTrashFill } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo, deleteItem }) {
  const handleClick = () => {
    deleteItem(todo.id);
  };

  return (
    <li className={styles.item}>
      <input id='checkbox' type='checkbox' className={styles.checkbox} />
      <span className={styles.todo}>{todo.text}</span>
      <button className={styles.trashBtn} onClick={handleClick}>
        <BsTrashFill />
      </button>
    </li>
  );
}
