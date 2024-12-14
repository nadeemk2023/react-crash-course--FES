import { useEffect } from 'react';
import axios from 'axios';

function Home() {
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(response);
    }
    fetchUsers();
  }, []);
  return <h1>Home</h1>;
}

export default Home;
