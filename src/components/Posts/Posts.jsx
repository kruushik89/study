import React, { useEffect, useState } from 'react';

const Posts = ({id}) => {

  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      })
  }, []);
  return (
    <div>
      aksdghjaj
    </div>
  );
};

export default Posts;