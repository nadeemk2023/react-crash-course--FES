import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  //My Solution
  //   const [user, setUser] = useState({});
  //   const { name, email, username } = user;
  //
  //   const fetchUser = async () => {
  //     const { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     setUser(data);
  //   };
  //
  //   useEffect(() => {
  //     fetchUser();
  //   }, [id]);
  //   return (
  //     <div style={{ textAlign: 'center', width: '100vw' }}>
  //       <h1>{name}</h1>
  //       <p>{email}</p>
  //       <p>{username}</p>
  //     </div>
  //   );
  //-------------------------------------------------------

  // David's Solution
  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Link to='/'>Go Back</Link>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.id}</p>
      <p>{user.username}</p>
    </div>
  );
}

export default Users;
