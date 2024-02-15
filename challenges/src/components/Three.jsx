import React, { useState } from 'react';

const Three = () => {
  const [age, setAge] = useState(12);

  function handleClick() {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  }

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Set State Using Previous State</h2>
          <p>
            Click on the button below to add 3 more years to age. Is the result
            what you expected?
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

export default Three;
