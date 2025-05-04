const express = require('express');
const app = express();
const path = require('path');

// Enable EJS templating
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve login page
app.get('/', (req, res) => {
  res.render('login');
});

// Route to serve signup page
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});