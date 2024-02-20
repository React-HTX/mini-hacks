import React, { useState } from 'react';
import Counter from './Counter';

const ExampleTwo = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      <div className="counter">
        {isPaused ? <p>See you later!</p> : <Counter />}
      </div>
      <div className="counter-checked">
        <label>
          <input
            className="input-checked"
            type="checkbox"
            checked={isPaused}
            onChange={(e) => setIsPaused(e.target.checked)}
          />
          Take a break
        </label>
      </div>
    </div>
  );
};

export default ExampleTwo;

/*
What happens when you check the box, "Take a break?"
Did the counter preserve state?
Now, you have different component types at the same position!
When the Counter was switched out for the "<p></p>" tag, Remoeve the Counter component from the DOM and destroyed the state.

*** React resets the state of its entire subtree ***

NEXT STEP: Go look see Solution
*/
