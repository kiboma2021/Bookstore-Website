import React from 'react';

const AddBook = () => {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form className="form-container">
        <input
          type="text"
          placeholder="Book title"
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
    </div>
  );
};

export default AddBook;