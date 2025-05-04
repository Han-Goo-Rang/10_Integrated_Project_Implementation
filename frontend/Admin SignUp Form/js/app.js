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

// Route to serve sign up page
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Route to handle sign up form submission
app.post('/signup', (req, res) => {
  const { firstName, lastName, contactNo, email, username, password } = req.body;
  // Handle sign up logic here
  console.log('User signed up:', { firstName, lastName, contactNo, email, username, password });
  res.send('User signed up successfully');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});