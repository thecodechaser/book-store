import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import getBookData from './apis/bookApi';

const data = async () => {
  const value = await getBookData();
  console.log(value)
}

data();

function App() {
  return (
    <div className="top-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Books />
      }
        />
        <Route
          path="/categories"
          element={
            <Categories />
    }
        />
      </Routes>
    </div>
  );
}

export default App;
