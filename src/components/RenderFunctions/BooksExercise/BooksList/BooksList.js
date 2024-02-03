import React from "react";
import { books } from "../../../../routes/data/books";

function BooksList({ children }) {

  return <ul>{books.map(children)}</ul>;
}

export { BooksList };
