# BookManagementSystem
Overview
This project is a full-stack Book Management Application built with a React front-end and a Spring Boot back-end. The front-end communicates with the back-end using GraphQL.

Features
Home Page: Display a list of all books with details including title, author, and description.
Add Book Page: Provide a form to add a new book with fields for title, author, and description.
Edit Book Page: Allow users to edit the details of an existing book.
Delete Book Functionality: Enable users to delete a book from the list.
Navigation: Provide navigation links between the home page, add book page, and edit book page.
Technologies Used
Front-End: React, Apollo Client, GraphQL
Back-End: Spring Boot, Spring Data JPA, GraphQL
Database: H2 (In-memory)

Setup Instructions

Front-End
Clone the Repository:
git clone https://github.com/angelic-computer-shop/BookManagementApp.git
cd book-management-app/book-store

Install Dependencies:
npm install

Start the React Application:
npm start
The application will run on http://localhost:3000.


Back-End
Clone the Repository:

If you haven't already cloned the repository, do so now:
git clone https://github.com/angelic-computer-shop/BookManagementApp.git
cd book-management-app/backend
Build and Run the Spring Boot Application:
./mvnw spring-boot:run

Database
The application uses an in-memory H2 database. No additional setup is required. The database will be initialized with some sample data on application startup.

GraphQL Playground
You can access the GraphQL Playground to test queries and mutations at http://localhost:8080/graphiql.

GraphQL Queries and Mutations
Fetch All Books

The back-end server will run on http://localhost:8080.

Database
The application uses an in-memory H2 database. No additional setup is required. The database will be initialized with some sample data on application startup.

GraphQL Playground
You can access the GraphQL Playground to test queries and mutations at http://localhost:8080/graphiql.
