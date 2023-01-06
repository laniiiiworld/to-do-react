import { useState } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';

let id = 0;
function App() {
  const [list, setList] = useState([]);

  const addItem = (text) => {
    setList((prevList) => [...prevList, { id: String(++id).padStart(3, '0'), text }]);
  };

  const deleteItem = (id) => {
    const items = [...list].filter((item) => item.id !== id);
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
