import React, { useState } from 'react';
import SolutionCounter from './SolutionCounter';

const Solution = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {/* Solution 1 */}
      {/* <div className="counter">
        {isPlayerA && <SolutionCounter person="John" />}
        {!isPlayerA && <SolutionCounter person="BillySue" />}
      </div> */}

      <div className="counter">
        {isPlayerA ? (
          <SolutionCounter key="John" person="John" />
        ) : (
          <SolutionCounter key="BillySue" person="BillySue" />
        )}
      </div>
      <button
        className="btn result"
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next Player!
      </button>
    </div>
  );
};

export default Solution;

/*
SOLUTION 1:
This renders 2 counters in different positions in the UI tree.
As seen in ExampleTwo, state gets destroyed each time it's removed from the DOM.

Solution 2:
This example still uses the ternary operator, but the key prop is added to make React distinguish between the same component types sitting in the same position of the tree.
*/
