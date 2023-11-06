import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      {users.map(el => (
        <div>
          <b>{el.id}</b> {el.name} <Link to={`${el.id}`}>Detail</Link>
          <button onClick={() => navigate(-1)}>go back</button>
        </div>
      ))}
      <hr/>

      <Outlet/>
    </div>
  );
};

export default UsersPage;