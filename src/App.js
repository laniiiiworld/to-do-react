import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
