import React from "react";
import "./BookItem.css";

function BookItem({ title, author, publishedYear, oldDate }) {
  return (
    <li className="book-item">
      <h3>{oldDate ? <mark>{title}</mark> : title}</h3>
      <p>Author: {author}</p>
      <p>Published Year: {publishedYear}</p>
    </li>
  );
}

export { BookItem };
