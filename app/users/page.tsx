import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 30 } }); // switch to cache: 'no-store for production'
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
