import React from 'react';

const AddForm = () => (
  <form className="form">
    <input className="input-title" type="text" placeholder="Book title" />
    <input className="input-category" type="text" placeholder="Category" />
    <button className="add-book-btn" type="submit">Add Book</button>
  </form>
);

export default AddForm;
