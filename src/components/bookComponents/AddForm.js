import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../../redux/books/books';

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    dispatch(addBookApi(newBook));
    setTitle('');
    setCategory('');
  };
  return (
    <form className="form">
      <input
        required
        className="input-title"
        type="text"
        placeholder="Book title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        required
        className="input-author"
        type="text"
        placeholder="Book author..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <select name="category" className="input-category">
        <option value="action">Action</option>
        <option value="science">Science</option>
        <option value="romance">Romance</option>
        <option value="thriller">Thriller</option>
      </select>
      <button className="add-book-btn" type="submit" onClick={addBookToStore}>Add Book</button>
    </form>
  );
};

export default AddForm;
