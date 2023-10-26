import React, { useState } from 'react';
import Posts from "../Posts/Posts";

const User = ({ name, username, phone, id }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  console.log(isShowDetail);

  const handleShowDetail = () => {
    setIsShowDetail((prevState) => !prevState);
  }
  return (
    <div>
      <h2>{name} {username}</h2>
      <button onClick={handleShowDetail}>Detail</button>
      {isShowDetail && (
        <div>
          This must be <b>{name} {username}</b> detail!!!
          <Posts id={id} />
          <hr/>
        </div>
      )}
    </div>
  );
};

export default User;