import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getStorage, setItemStorage, setStorage } from './storage';

let id = 0;
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const items = getStorage('todoList', []);
    id = items.reduce((max, cur) => (max = Math.max(max, Number(cur.id))), 0);
    setList(items);
  }, []);

  const addItem = (text) => {
    const item = { id: String(++id).padStart(3, '0'), text };
    setItemStorage('todoList', item);
    setList((prevList) => [...prevList, item]);
  };

  const deleteItem = (id) => {
    const items = list.filter((item) => item.id !== id);
    setStorage('todoList', items);
    setList(items);
  };

  return (
    <div className={styles.app}>
      <Header />
      <List list={list} deleteItem={deleteItem} />
      <Footer addItem={addItem} />
    </div>
  );
}

export default App;
