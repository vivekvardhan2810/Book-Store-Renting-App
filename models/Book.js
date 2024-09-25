const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailableForRent: { type: Boolean, default: true },
  rentPrice: { type: Number, default: 0 },
});

module.exports = mongoose.model('Book', bookSchema);