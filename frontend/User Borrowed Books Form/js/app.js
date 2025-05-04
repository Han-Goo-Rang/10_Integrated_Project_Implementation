const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Enable EJS templating
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data for borrowed books
let borrowedBooks = [
  { id: 1, userId: 1, amount: '002 Books', dueDate: '13-03-2024', date: '25-02-2024 10:39:43' },
  // Add more mock data as needed
];

// Route to serve borrowed books page
app.get('/borrowed-books', (req, res) => {
  res.render('borrowed-books', { books: borrowedBooks });
});

// Route to handle return book form submission
app.post('/return-book', (req, res) => {
  const { id } = req.body;
  // Handle return book logic here
  borrowedBooks = borrowedBooks.filter(book => book.id !== id);
  res.send('Book returned successfully');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});