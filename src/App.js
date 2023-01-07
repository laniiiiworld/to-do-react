import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getStorage, removeItemStorage, addItemStorage, setItemStorage } from './storage';

let id = 0;
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const items = getStorage('todoList', []);
    id = items.reduce((max, cur) => (max = Math.max(max, Number(cur.id))), 0);
    setList(items);
  }, []);

  const applyFilter = (type) => {
    const items = getStorage('todoList', []);
    switch (type) {
      case 'A':
        setList(items);
        break;
      case 'Y':
        setList(items.filter((item) => item.isChecked));
        break;
      case 'N':
        setList(items.filter((item) => !item.isChecked));
        break;
      default:
        throw new Error(`'${type}'은 정의되지 않은 타입입니다.`);
        break;
    }
  };
  const addItem = (text) => {
    const item = { isChecked: false, id: String(++id).padStart(3, '0'), text };
    addItemStorage('todoList', item);
    setList((prevList) => [...prevList, item]);
  };

  const deleteItem = (id) => {
    const items = list.filter((item) => item.id !== id);
    removeItemStorage('todoList', id);
    setList(items);
  };

  const handelCheckbox = (todo) => {
    const items = list.map((item) => (item.id !== todo.id ? item : { ...item, isChecked: !todo.isChecked }));
    setItemStorage('todoList', todo);
    setList(items);
  };

  return (
    <div className={styles.app}>
      <Header applyFilter={applyFilter} />
      <List list={list} deleteItem={deleteItem} handelCheckbox={handelCheckbox} />
      <Footer addItem={addItem} />
    </div>
  );
}

export default App;
