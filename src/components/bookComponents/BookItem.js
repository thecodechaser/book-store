import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    book: {
      title,
    },
  } = props;
  return (
    <div className="book-container">
      <h3 className="book-title">
        {title}
      </h3>
      <button className="remove-btn" type="button">Remove</button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default BookItem;
