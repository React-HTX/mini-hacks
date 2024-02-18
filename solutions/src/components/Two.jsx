import React, { useState } from 'react';

const Two = () => {
  const [age, setAge] = useState(12);

  /*
  Wrong way!
  function handleClick() {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  }
  */

  /*
  Think of the above code as this:
  function handleClick() {
    setAge(12 + 1);
    setAge(12 + 1);
    setAge(12 + 1);
  }
  */

  // Correct way!
  function handleClick() {
    // prevAge --> UPDATER FUNCTION
    // (a) => {} --> Another naming convention
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  }

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Set State Using Previous State</h2>
          <p>
            Click on the button below to add <strong>3 more years</strong> to
            age. Is the result what you expected?
            <br />
            Correct the logic in your code.
          </p>
        </div>
        <div className="section-center">
          <button className="btn" type="button" onClick={handleClick}>
            ADD YEARS
          </button>
          <div className="result">
            <h3>AGE: {age}</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Two;

/*
On problem One, we learned that setting state only updates state on the next render.
React only gives you a snapshot of the state for that render.
HOWEVER, React provides a way to get the previous state before the update:
UPDATE STATE USING PREVIOUS STATE
When you need to update state based on the previous state, use the function form of the setState method.
The function form of setState receives the previous state as an argument.
This way, you can access the previous state and update it accordingly.
***When you set a function as the argument of the setState method, React will pass the previous state to that function.***


*/
/*
3rd option
function handleClick() {
  setCount(count + 1);
  setCount((count) => {
    console.log(count);
    return count;
  });
}
*/
