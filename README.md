# Book Store Management System with an ORM
The Bookstore Management System is a web application built using Node.js, Express, Sequelize, and MySQL2. This system allows users to manage a collection of books, authors, and their relationships.

## Technologies

### Backend
* **Frameworks**: NodeJS, Express, MySql, Sequelize

## Technical Features

**Database Setup:**
- Created a MySQL database for the application to store book and author data.
- Established a connection to the database using Sequelize and MySQL2.

**Model Definition:**
- Defined the Author and Book models using Sequelize, specifying their attributes and relationships.

**Express Application:**
- Set up an Express application to serve as the API for the Bookstore Management System.
- Implemented CRUD routes for books, including creating, reading, updating, and deleting book records.
- Created CRUD routes for authors, allowing users to create and manage author records.

**Associating Books with Authors:**
- Defined a relationship between books and authors, allowing each book to be associated with a specific author.
- Ensured that book creation routes allow users to specify the author by associating the book with an existing author or creating a new author if needed.

**Querying Books by Author:**
- Implemented a route to query all books by a specific author, including the author's name.
- Utilized Sequelize's include option to fetch associated author data along with books, providing a complete view of the author's work.

**Error Handling:**
- Implemented error handling for various scenarios, including missing authors, nonexistent books, and database errors.

**Organized Routes:**
- Structured the project by creating a routes directory to separate routes for books and authors, promoting clean and maintainable code.
