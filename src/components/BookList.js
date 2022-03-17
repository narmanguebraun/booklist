import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        <li>
          <div className="title">Title</div>
          <div className="author">Author</div>
        </li>
        { books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Fancy reading a new book?</div>
  )
}

export default BookList;