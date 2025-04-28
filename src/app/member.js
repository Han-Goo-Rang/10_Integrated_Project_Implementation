'use client';
import { useEffect, useState } from 'react';

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/members')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Members Management</h1>
      <ul>
        {members.map(member => (
          <li key={member._id}>{member.name} ({member.email})</li>
        ))}
      </ul>
    </div>
  );
}