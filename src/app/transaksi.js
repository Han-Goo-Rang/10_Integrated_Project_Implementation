'use client';
import { useEffect, useState } from 'react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx._id}>
            {tx.bookTitle} borrowed by {tx.memberName} - {tx.status}
          </li>
        ))}
      </ul>
    </div>
  );
}