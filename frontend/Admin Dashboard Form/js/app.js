const express = require('express');
const app = express();
const path = require('path');

// Enable EJS templating
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve dashboard page
app.get('/', (req, res) => {
  res.render('dashboard', {
    totalUserBase: 150,
    totalBookCount: 1500,
    branchCount: 10,
    borrowedBooks: 700, // Example data
    returnedBooks: 300, // Example data
    overdueBorrowers: [
      { name: 'Samsmith Cunasekara', borrowedId: 10 },
      // Add more mock data as needed
    ],
    admins: [
      { name: 'Nisal Gunasekara', adminId: 1, status: 'active' },
      // Add more mock data as needed
    ],
    branches: [
      { name: 'BookWorm - Matara', branchId: 1 },
      // Add more mock data as needed
    ]
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});