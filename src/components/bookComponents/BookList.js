import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      <h2 className="booklist-h2">Book List</h2>
      {books.length ? (
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
      ) : (
        <h3>There is not books</h3>
      )}
    </div>
  );
};

export default BookList;
