import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBookApi } from '../../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      id, title, category,
    },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi(id));
  };

  const percentage = 60;
  return (
    <div className="book-container">
      <div className="title-container">
        <h3 className="book-title">
          {title}
        </h3>
        <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
        <h3 className="book-author">
          {category}
        </h3>
      </div>
      <div className="progress-bar">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
        />
      </div>
      <div />
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
