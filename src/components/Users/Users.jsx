import { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
      })
  }, []);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <ul className="users">
        {users.map((user) => <User {...user}/>)}
      </ul>
    </>
  )
}

export default Users;