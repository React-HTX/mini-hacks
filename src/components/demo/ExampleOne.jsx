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
