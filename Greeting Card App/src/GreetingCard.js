import React from 'react';

const GreetingCard = ({ name, message }) => {
  return (
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
};

export default GreetingCard;
