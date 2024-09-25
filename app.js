const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // Serve static files

app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Use the book routes
app.use('/books', bookRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});