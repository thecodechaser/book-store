import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      id, title, author,
    },
  } = props;
 
  return (
    <div className="book-container">
      <h3 className="book-title">
        {title}
      </h3>
      <h3 className="book-title">
        {author}
      </h3>
      <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
