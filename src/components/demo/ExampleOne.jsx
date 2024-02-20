import React, { useState } from 'react';
import Counter from './Counter';

const ExampleOne = () => {
  const [showB, setShowB] = useState(true);

  return (
    <div>
      <div className="counter">
        <Counter />
        {showB && <Counter />}
      </div>
      <div className="counter-checked">
        <label>
          <input
            className="input-checked"
            type="checkbox"
            checked={showB}
            onChange={(e) => setShowB(e.target.checked)}
          />
          Render the second counter
        </label>
      </div>
    </div>
  );
};

export default ExampleOne;

/*
When you add state to a component, the state does NOT live inside the component.
It lives in React (React puts it on a shelf)!
React associates each piece of state to the correct component, dependent upon where that state sits in the render tree.
<Counter /> and <Counter /> are currently at 2 different positions in the render tree.
Add scores to each player:
If you "uncheck" the checkbox, the second <Counter /> is removed from the render tree.
If you "check" the checkbox, the second <Counter /> is added to the render tree and it begins with the initial score of zero.

NEXT STEP: Go look at component Five
*/
