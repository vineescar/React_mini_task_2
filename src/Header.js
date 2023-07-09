import React from 'react';

const Header = ({ handleClick1, handleClick2, handleClick3 }) => {
  return (
    <header>
      <form>
        <button className="button" onClick={() => handleClick1()}>Users</button>
        <button className="button" onClick={() => handleClick2()}>Posts</button>
        <button className="button" onClick={() => handleClick3()}>Comments</button>
      </form>
    </header>
  );
};

export default Header;
