import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import { v4 as uuidv4 } from 'uuid';

const dispatch = useDispatch();
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');

const addBook =(e)=>{
   e.preventDefault();
   if(title === '' || author === '') return;
    const newBook ={
        id: uuidv4(),
        title,
        author
    }

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
}

const AddForm = () => (
  <form className="form">
    <input required className="input-title" type="text" placeholder="Book title..." value={title}
    onChange={(e) => setTitle(e.target.value)}/>
    <input required className="input-author" type="text" placeHolder="Book author..." value={author}
    onChange={(e) => setAuthor(e.target.value)}/>
    <input className="input-category" type="text" placeholder="Category" />
    <button className="add-book-btn" type="submit" onClick={addBook}>Add Book</button>
  </form>
);

export default AddForm;
