import React, { useState } from 'react';

export default function Five() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Reset State</h2>
          <p>
            Add scores to the first player. Now, switch to the next player. The
            scorecard should reset and not reflect the previous player's score.
            Is the result what you expected?
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

/*
We still have 2 different counters, except now we are attempting to show one counter over another, based on clicking on the button, "next player".
THE PROBLEM:
Both counters (same component type) are sitting in the same position in the render tree.
When you click on "next player", the counter state does not get reset.
React is looking at the position in the UI tree, NOT the JSX markup.

NEXT STEP: Go look at ExampleTwo
*/
