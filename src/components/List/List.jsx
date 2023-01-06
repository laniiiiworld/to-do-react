import React from 'react';
import Item from '../Item/Item';
import styles from './List.module.css';

export default function List({ list }) {
  return (
    <ul className={styles.list}>
      {list.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
