import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Item from '../Item/Item';
import styles from './List.module.css';

export default function List({ list, deleteItem, handelCheckbox }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul className={`${styles.list} ${darkMode ? styles.dark : ''}`}>
      {list.map((todo) => (
        <Item key={todo.id} todo={todo} deleteItem={deleteItem} handelCheckbox={handelCheckbox} />
      ))}
    </ul>
  );
}
