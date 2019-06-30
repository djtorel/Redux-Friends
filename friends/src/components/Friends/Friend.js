import React from 'react';

const Friend = ({ name, age, email, id }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
    </div>
  );
};

export default Friend;
