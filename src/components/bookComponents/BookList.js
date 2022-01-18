import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      title: 'Book one',
      id: 0,
    },
    {
      title: 'Book two',
      id: 1,
    },
    {
      title: 'Book three',
      id: 2,
    },
  ];
  return (
    <div>
      <h2 className="booklist-h2">Book List</h2>
      {
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
    }
    </div>
  );
};

export default BookList;
