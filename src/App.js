import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import { DarkModeProvider } from './context/DarkModeContext';
import { getStorage, setStorage } from './storage';

const filters = ['All', 'Active', 'Completed'];
function App() {
  const [list, setList] = useState(() => getStorage('todoList', []));
  const [filteredList, setFilteredList] = useState(list);
  const [filter, setFilter] = useState(filters[0]);

  useEffect(() => {
    setStorage('todoList', list);
    getFilteredList(filter, list);
  }, [list, filter]);

  const applyFilter = (selected) => {
    setFilter(selected);
  };

  const getFilteredList = (selected, list) => {
    switch (selected) {
      case 'All':
        setFilteredList(list);
        break;
      case 'Active':
        setFilteredList(list.filter((item) => !item.isChecked));
        break;
      case 'Completed':
        setFilteredList(list.filter((item) => item.isChecked));
        break;
      default:
        throw new Error(`'${selected}'은(는) 정의되지 않은 타입입니다.`);
    }
  };

  const addItem = (text) => {
    const item = { isChecked: false, id: uuidv4(), text };
    setList((prevList) => [...prevList, item]);
  };

  const deleteItem = (id) => {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  };

  const handelCheckbox = (todo) => {
    const items = list.map((item) => (item.id !== todo.id ? item : { ...item, isChecked: !todo.isChecked }));
    setList(items);
  };

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} applyFilter={applyFilter} />
      <List list={filteredList} deleteItem={deleteItem} handelCheckbox={handelCheckbox} />
      <Footer addItem={addItem} />
    </DarkModeProvider>
  );
}

export default App;
