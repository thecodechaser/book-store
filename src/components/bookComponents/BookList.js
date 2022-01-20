import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBookApi } from '../../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
      ) : (
        <h3 className="booklist-h3">There is no books!</h3>
      )}
    </div>
  );
};

export default BookList;
