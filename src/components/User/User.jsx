import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(setUser);
  }, [id]);

  return (
    <div>
      {user && <h3>{user.id} {user.name}</h3>}
    </div>
  );
};

export default User;