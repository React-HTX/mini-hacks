import React, { useState } from 'react';

const Six = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Log Current State</h2>
          <p>
            Open your console, then click on the button to log state. Is the
            result what you expected?
            <br />
            Correct the logic in your code.
          </p>
        </div>
        <div className="section-center">
          <button className="btn" type="button" onClick={handleClick}>
            You pressed me {count} times
          </button>
        </div>
      </div>
    </main>
  );
};

export default Six;
