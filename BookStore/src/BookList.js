import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BookCard from './BookCard'; // Assuming BookCard component is correctly implemented

const HomePage = ({ books, deleteBook }) => {
  return (
    <div>
      <h1 className="my-4">Book List</h1>
      <Row>
        {books.map((book) => (
          <Col md={4} key={book.id}>
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              deleteBook={deleteBook}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
