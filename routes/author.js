const express = require('express');
const router = express.Router();
const {createAuthor, getAuthorBooks} = require("../controllers/author")


router.post('/', createAuthor);
router.get("/:authorId/books", getAuthorBooks);


module.exports = router;