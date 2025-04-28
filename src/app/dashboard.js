export default function Dashboard() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <p>Welcome to the Library Management System.</p>
      </div>
    );
  }
  
  /// File: src/app/books/page.js
  'use client';
  import { useEffect, useState } from 'react';
  
  export default function BooksPage() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/books')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, []);
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Books Management</h1>
        <ul>
          {books.map(book => (
            <li key={book._id}>{book.title} by {book.author}</li>
          ))}
        </ul>
      </div>
    );
  }