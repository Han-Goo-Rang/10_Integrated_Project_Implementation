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

// Route to serve reset password page
app.get('/reset-password', (req, res) => {
  res.render('reset-password');
});

// Route to handle reset password form submission
app.post('/reset-password', (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  if (newPassword === confirmPassword) {
    // Handle password reset logic here
    console.log('Password reset successful');
    res.send('Password reset successful');
  } else {
    res.send('Passwords do not match');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});