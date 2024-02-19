import React, { useState } from 'react';

const Counter = () => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={`section-center score ${className}`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h3>score: {score}</h3>
      <button className="btn" onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
};

export default Counter;
