import React, { useState } from 'react';

export default function Five() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Preserving and Resetting State</h2>
          <p>
            Add different scores to each player. Each score should differ and
            not reflect the other player's score. Is the result what you
            expected?
            <br />
            Correct the logic in your code.
          </p>
        </div>

        <div className="section-center">
          {/* Wrong way! --> Please see "Five Explained" for answers */}
          {isPlayerA ? <Counter person="John" /> : <Counter person="Jane" />}
          <button
            className="btn result"
            onClick={() => {
              setIsPlayerA(!isPlayerA);
            }}
          >
            Next Player!
          </button>
        </div>
      </div>
    </main>
  );
}

function Counter({ person }) {
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
      <h3>
        {person}'s score: {score}
      </h3>
      <button className="btn" onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
