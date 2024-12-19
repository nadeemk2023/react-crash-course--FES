import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../components/User.jsx';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(data);
  }

  function renderUsers() {
    return users.map(user => (
      <Link to={`users/${user.id}`} key={user.id}>
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ));
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  return <>{users.length ? renderUsers() : <h1>Loading...</h1>}</>;
}

export default Home;
