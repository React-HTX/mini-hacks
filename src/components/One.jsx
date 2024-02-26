import React, { useState } from 'react';

const One = () => {
  const [count, setCount] = useState(0);

  /*
  Wrong way!
  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  */

  // Correct way!
  function handleClick() {
    setCount(count + 1);
  }
  console.log('outside', count);

  /*
  2nd option --> save new state in a variable, then pass it to the set function.
  function handleClick() {
    const nextCount = count + 1;
    setCount(nextCount);
    console.log('inside', nextCount);
  }
  */

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

export default One;

/*
REMEMBER!
The set function only updates state on the next render.
State updates in React are asynchronous, and the state is not updated immediately after calling setState.
The update is put into a queue, but React may batch multiple setState calls into a single update for better performance.
Once all are batched, the state is updated and the component re-renders.
This optimization helps to avoid unnecessary re-renders and improve performance.
*/
