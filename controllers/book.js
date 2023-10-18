const Book = require("../models/book");

const createBook = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ error: "Please provide a title" });
  }

  try {
    const book = await Book.create({ title });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Error creating the book" });
  }
};

const getBook = async (req, res) => {
  try {
    const books = await Book.findAll();
    if (books.length < 1) {
      res.status(400).json({error: "No Books Found"})
    }
    res.json(books);
  } catch(err) {
    res.status(500).json({ error: "Error finding books" });

  }
 

};
const getBookDetails = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
};

const updateBook = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ error: "Please provide a title" });
  }
try {
  const book = await Book.findByPk(req.params.id);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    book.update({title});
    res.json(book);
  }

} catch(err) {
  res.status(500).json({ error: "Error finding book" });

}

};

const deleteBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    book.destroy();
    res.json({ message: 'Book deleted successfully' });
  }
};

module.exports = {
  createBook,
  getBook,
  getBookDetails,
  updateBook,
  deleteBook,
};
