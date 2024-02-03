import React from "react";
import { BooksList } from "../../../components/RenderFunctions/BooksExercise/BooksList/BooksList";
import { BookItem } from "../../../components/RenderFunctions/BooksExercise/BooksItem/BookItem";

function BooksExercise() {
  return (
    <section>
      <BooksList>
        {(book) => (
          <BookItem {...book} oldDate={book.publishedYear < 2018 && true} />
        )}
      </BooksList>
    </section>
  );
}

export { BooksExercise };
