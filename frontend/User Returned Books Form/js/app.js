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

// Mock data for returned books
let returnedBooks = [
  { id: '001', userId: 1, amount: '002 Books', dueDate: '13-03-2024', date: '25-02-2024 10:39:43' },
  // Add more mock data as needed
];

// Route to serve returned books page
app.get('/returned-books', (req, res) => {
  res.render('returned-books', { books: returnedBooks });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});