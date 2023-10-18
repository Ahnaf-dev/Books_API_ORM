const Author = require("../models/author");
const Book = require('../models/book');

const createAuthor = async (req, res) => {
  const { name} = req.body;

  if (!name) {
    res.status(400).json({ error: "Please provide an author name" });
  }

  try {
    const author = await Author.create({ name});
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: "Error creating author" });
  }
}

const getAuthorBooks = async (req,res) => {
  try {
    const {authorId} = req.params

    const author = await Author.findByPk(authorId);

    if (!author) {
      res.status(404).json({ error: 'Author not found' });
    } else {
      const books = await Book.findAll({
        where: { authorId },
        include: Author, 
      });

      if (books.length === 0) {
        res.json({ message: 'No books found for this author' });
      } else {
        res.json({ books });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
}

module.exports = {
  createAuthor,
  getAuthorBooks
}
