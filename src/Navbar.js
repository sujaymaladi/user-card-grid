import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
        <div className="brand">USER CARD GRID</div>
        <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;