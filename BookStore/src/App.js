import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BookList from './BookList';
import AddBookPage from './AddBookPage';
import EditBookPage from './EditBookPage';

const App = () => {
  const [books, setBooks] = useState([
    { id: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Set in the American South during the 1930s, this classic novel explores themes of racial injustice and moral growth. The story is told through the eyes of Scout Finch, a young girl whose father, Atticus Finch, is a lawyer defending a black man accused of raping a white woman. The novel addresses serious issues while capturing the warmth and humor of small-town life.' },
    { id: '2', title: '1984', author: 'George Orwell', description: 'This dystopian novel presents a terrifying vision of a totalitarian future where the government, led by the Party and its enigmatic leader Big Brother, exercises total control over every aspect of citizens lives. The protagonist, Winston Smith, works for the Party rewriting history but secretly yearns for rebellion. The novel explores themes of surveillance, truth, and individuality.' },
    { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen', description: 'This beloved novel follows the life of Elizabeth Bennet, a witty and independent young woman, as she navigates issues of marriage, morality, and misconceptions in early 19th-century England. Elizabeths initial disdain for the proud Mr. Darcy gradually transforms into understanding and love. The novel is celebrated for its keen social commentary and enduring romance.' },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
     
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">BM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/add">Add Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
         
          
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<BookList books={books} deleteBook={deleteBook} />} />
          <Route path="/add" element={<AddBookPage addBook={addBook} />} />
          <Route path="/edit/:id" element={<EditBookPage books={books} editBook={editBook} />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
