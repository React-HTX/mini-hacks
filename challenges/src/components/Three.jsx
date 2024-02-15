import React, { useState } from 'react';

const Three = () => {
  // Form One useState
  const [formOne, setFormOne] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
  });
  // Form Two useState
  const [formTwo, setFormTwo] = useState({
    name: 'Barb Hanson',
    details: {
      age: 23,
      city: 'H-Town',
      passion: 'Coding',
    },
  });

  // Form Two Change Handlers
  function handleNameChange(e) {
    setFormTwo({ name: e.target.value });
  }

  function handleAgeChange(e) {
    setFormTwo({ details: { age: e.target.value } });
  }

  function handleCityChange(e) {
    setFormTwo({ details: { city: e.target.value } });
  }

  function handlePassionChange(e) {
    setFormTwo({ details: { passion: e.target.value } });
  }

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Update the Objects</h2>
          <p>
            Update the input fields below. As you update, all results should
            remain visible and the only change should be the input field you are
            updating. Is the result what you expected?
            <br />
            Correct the logic in your code.
          </p>
        </div>

        {/* Form One JSX */}
        <div className="section-center">
          <div className="form-container">
            <h4>Form One Challenge</h4>
            <div className="form-input">
              <label>First Name:</label>
              <input
                value={formOne.firstName}
                onChange={(e) => setFormOne({ firstName: e.target.value })}
              />
            </div>
            <div className="form-input">
              <label>Last Name:</label>
              <input
                value={formOne.lastName}
                onChange={(e) => setFormOne({ lastName: e.target.value })}
              />
            </div>
            <div className="form-input">
              <label>Email:</label>
              <input
                value={formOne.email}
                onChange={(e) => setFormOne({ email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <p className="bold">
              RESULT: {formOne.firstName} {formOne.lastName} {formOne.email}
            </p>
            <p>Expected Result: firstName lastName email</p>
            <p>Example: John Doe johndoe@email.com</p>
          </div>

          {/* Form Two JSX */}
          <div className="section-center">
            <div className="form-container">
              <h4>Form Two Challenge</h4>
              <div className="form-input">
                <label>Name:</label>
                <input value={formTwo.name} onChange={handleNameChange} />
              </div>
              <div className="form-input">
                <label>Age:</label>
                <input value={formTwo.details.age} onChange={handleAgeChange} />
              </div>
              <div className="form-input">
                <label>City:</label>
                <input
                  value={formTwo.details.city}
                  onChange={handleCityChange}
                />
              </div>
              <div className="form-input">
                <label>Passion:</label>
                <input
                  value={formTwo.details.passion}
                  onChange={handlePassionChange}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="bold">
              RESULT: {formTwo.name} {formTwo.details.age}{' '}
              {formTwo.details.city} {formTwo.details.passion}
            </p>
            <p>Expected Result: name age city passion</p>
            <p>Example: Barb Hason 23 H-Town Coding</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Three;
