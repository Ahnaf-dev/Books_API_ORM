const express = require('express');
const app = express();
const sequelize = require('./config.js');
require('dotenv').config()
const port = process.env.PORT || 3000;
const Book = require('./models/book');
const bookRouter = require('./routes/book');


app.use(express.json());


// routes
app.use('/api/books', bookRouter)


app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});