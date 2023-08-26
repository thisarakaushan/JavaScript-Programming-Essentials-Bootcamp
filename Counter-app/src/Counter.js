import React, { useState } from 'react';
import './Counter.css'; // Make sure to create this CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="counter">{count}</h1>
      <div className="button-container">
        <button className="button" onClick={decreaseCount}>Decrease</button>
        <button className="button" onClick={increaseCount}>Increase</button>
      </div>
    </div>
  );
}

export default Counter;
