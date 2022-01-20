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

  const percentage = 65;
  return (
    <div className="book-container">
      <div className="title-container">
        <h3 className="book-title">
          {title}
        </h3>
        <h3 className="book-author">
          {category}
        </h3>
        <div className="book-btns">
          <button className="remove-btn" type="button">Comments</button>
          <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
          <button className="remove-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-bar-c">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
          className="progress-bar"
        />
        <div className="progress-value-c">
          <p className="progress-percentage">
            {percentage}
            %
          </p>
          <p className="progress-completed">Completed</p>
        </div>
      </div>
      <div className="update-progg-c">
        <h2 className="chapter-h2">CURRENT CHAPTER</h2>
        <h3 className="chapter-h3">
          Chapter
          {' '}
          { `${Math.floor(Math.random() * 50)}`}
        </h3>
        <button type="button" className="update-progg-btn">Update Progress</button>
      </div>
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
