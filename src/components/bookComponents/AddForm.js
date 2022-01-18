import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
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
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input className="input-category" type="text" placeholder="Category" />
      <button className="add-book-btn" type="submit" onClick={addBookToStore}>Add Book</button>
    </form>
  );
};

export default AddForm;
