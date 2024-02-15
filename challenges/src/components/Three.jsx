import React, { useState } from 'react';

const Three = () => {
  const [inputsA, setInputsA] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
  });

  function handleFormOneChange(e) {
    setInputsA({
      ...inputsA,
      firstName: e.target.value,
    });
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
          <div className="form-container">
            <label>First Name:</label>
            <input
              value={inputsA.firstName}
              onChange={(e) => handleFormOneChange(e)}
            />
          </div>
          <div>
            <p>
              {inputsA.firstName} {inputsA.lastName} {inputsA.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Three;
