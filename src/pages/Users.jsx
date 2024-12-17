import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Users() {
  const { id } = useParams();

  useEffect(() => {
    //fetch(`https://api.instagram.com/${username}`)
    // something similiar to this approach is how instagram fetches data about a user and displays it once on mounting
  }, []);
  return <h1>{id}</h1>;
}

export default Users;
