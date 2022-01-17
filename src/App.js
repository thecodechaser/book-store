import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route 
      path="/"
      element={
        <Books />
      }>
    </Route>
    <Route 
    path="/categories"
    element={
      <Categories />
    }>
    </Route>
    </Routes>
    </>
  );
}

export default App;
