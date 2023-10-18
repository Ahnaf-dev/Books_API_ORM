const express = require('express');
const router = express.Router();
const {getBook, createBook, getBookDetails, updateBook, deleteBook} = require('../controllers/book')


router.get('/', getBook).post('/',createBook);

router.get('/:id', getBookDetails).put("/:id", updateBook).delete('/:id', deleteBook);

module.exports = router;