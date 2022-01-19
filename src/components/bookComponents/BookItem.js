/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      item_id, title, category,
    },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook({ item_id }));
  };
  return (
    <div className="book-container">
      <div className="title-container">
        <h3 className="book-title">
          {title}
        </h3>
        <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
      </div>
      <h3 className="book-author">
        {category}
      </h3>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
