import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { name, email, username } = user;

  const fetchUser = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return (
    <div style={{ textAlign: 'center', width: '100vw' }}>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  );
}

export default Users;
