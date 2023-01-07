import React from 'react';
import { BsTrash, BsTrashFill } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo, deleteItem, handelCheckbox }) {
  const handleClick = () => {
    deleteItem(todo.id);
  };

  const handleChange = () => {
    handelCheckbox(todo);
  };

  return (
    <li className={styles.item}>
      <input id='checkbox' type='checkbox' className={styles.checkbox} onChange={handleChange} checked={todo.isChecked} />
      <span className={styles.todo}>{todo.text}</span>
      <button className={styles.trashBtn} onClick={handleClick}>
        <BsTrashFill />
      </button>
    </li>
  );
}
