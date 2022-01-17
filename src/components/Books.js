import React from 'react';

const Books = () => (
  <main>
    <div />
    <h2 className="add-book-h2">ADD NEW BOOK</h2>
    <form className="form">
      <input className="input-title" type="text" placeholder="Book title" />
      <input className="input-category" type="text" placeholder="Category" />
      <button className="add-book-btn" type="submit">Add Book</button>
    </form>
  </main>
);

export default Books;
