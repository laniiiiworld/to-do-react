import React from 'react';
import Item from '../Item/Item';
import styles from './List.module.css';

export default function List() {
  const list = ['react 공부', '밥먹기', '잠자기'];

  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <Item todo={item} />
      ))}
    </ul>
  );
}
