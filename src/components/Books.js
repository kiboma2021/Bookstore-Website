import React from 'react';

const Books = (props) => {
const {title, author} = props
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <ul>
        <li>Comment </li>
        <li>Remove </li>
        <li>Edit </li>
      </ul>
    </div>
  );
};

export default Books;

