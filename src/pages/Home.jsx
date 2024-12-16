import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  return (
    <div style={{ border: '3px solid black' }}>
      <div>{users[0]?.id}</div>
      <div>{users[0]?.name}</div>
      <div>{users[0]?.email}</div>
      <div>{users[0]?.username}</div>
    </div>
  );
}

export default Home;
