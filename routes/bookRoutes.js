const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.render('index', { books });
});

// Get single book by ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('book', { book });
});

// Handle renting a book
router.post('/:id/rent', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book.isAvailableForRent) {
    book.isAvailableForRent = false;
    await book.save();
    res.send('Book rented successfully!');
  } else {
    res.send('Book is not available for rent.');
  }
});

module.exports = router;