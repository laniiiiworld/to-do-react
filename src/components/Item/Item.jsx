import React, { useContext } from 'react';
import { BsTrash, BsTrashFill } from 'react-icons/bs';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Item.module.css';

export default function Item({ todo, deleteItem, handelCheckbox }) {
  const { darkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    deleteItem(todo.id);
  };

  const handleChange = () => {
    handelCheckbox(todo);
  };

  return (
    <li className={`${styles.item} ${darkMode ? styles.dark : ''}`}>
      <input id='checkbox' type='checkbox' className={styles.checkbox} onChange={handleChange} checked={todo.isChecked} />
      <span className={styles.todo}>{todo.text}</span>
      <button className={styles.trashBtn} onClick={handleClick}>
        {darkMode ? <BsTrash /> : <BsTrashFill />}
      </button>
    </li>
  );
}
