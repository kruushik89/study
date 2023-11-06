import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <NavLink className={({isActive}) => isActive ? 'my-active' : 'hihihi'} to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};

export default HeaderNav;