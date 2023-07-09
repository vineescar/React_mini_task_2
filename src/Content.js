import React from 'react';

const Content = ({ item1 }) => {
  return (
    <>
      <ul>
        {item1.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
};

export default Content;

