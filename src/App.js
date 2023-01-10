import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import { DarkModeProvider } from './context/DarkModeContext';
import { getStorage, removeItemStorage, addItemStorage, setItemStorage } from './storage';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getStorage('todoList', []));
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
    }
  };
  const addItem = (text) => {
    const item = { isChecked: false, id: uuidv4(), text };
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
    <DarkModeProvider>
      <div className={styles.app}>
        <Header applyFilter={applyFilter} />
        <List list={list} deleteItem={deleteItem} handelCheckbox={handelCheckbox} />
        <Footer addItem={addItem} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
