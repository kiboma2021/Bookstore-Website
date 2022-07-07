import React from 'react';

const AddBook = () => {
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Add book title"
        name="title"
        className="input-book"
      />
      <input
        type="text"
        placeholder="Add author"
        name="author"
        className="input-author"
      />      
    </form>
  );
};

export default AddBook;