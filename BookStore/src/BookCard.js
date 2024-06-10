import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BookCard = ({ id, title, author, description, deleteBook }) => {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">Title: {title}</Card.Header>
      <Card.Body>
        <Card.Title>Author: {author}</Card.Title>
        <Card.Text> {description}</Card.Text>
        <div className="d-flex justify-content-end g-5">
          <Link to={`/edit/${id}`} className="btn btn-primary mr-2 ">Edit</Link>
          <Button variant="danger" onClick={() => deleteBook(id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
