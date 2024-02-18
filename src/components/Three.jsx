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
  // Form Three useState
  const [formThree, setFormThree] = useState({
    person: 'Jane Smith',
  });

  // Form Two Change Handlers
  function handleNameChange(e) {
    // wrong way
    // setFormTwo({ name: e.target.value });
    // right way
    setFormTwo({ ...formTwo, name: e.target.value }); // copy old state and update name
  }

  function handleAgeChange(e) {
    // wront way
    // setFormTwo({ details: { age: e.target.value } });
    // right way
    setFormTwo({
      ...formTwo, // copy old state
      details: {
        ...formTwo.details,
        age: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    // wrong way
    // setFormTwo({ details: { city: e.target.value } });
    //right way
    setFormTwo({
      ...formTwo,
      details: {
        ...formTwo.details,
        city: e.target.value,
      },
    });
  }

  function handlePassionChange(e) {
    // wrong way
    // setFormTwo({ details: { passion: e.target.value } });
    // right way
    setFormTwo({
      ...formTwo,
      details: {
        ...formTwo.details,
        passion: e.target.value,
      },
    });
  }

  // Form Three Change Handler
  function handlePersonChange(e) {
    // wrong way --> obj.is
    // formThree.person = e.target.value;
    // setFormThree({ formThree });

    // right way
    setFormThree({ ...formThree, person: e.target.value });
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
            <h3>Form One Challenge</h3>
            <div className="form-input">
              <label>First Name:</label>
              <input
                value={formOne.firstName}
                onChange={(e) =>
                  setFormOne({ ...formOne, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-input">
              <label>Last Name:</label>
              <input
                value={formOne.lastName}
                onChange={(e) =>
                  setFormOne({ ...formOne, lastName: e.target.value })
                }
              />
            </div>
            <div className="form-input">
              <label>Email:</label>
              <input
                value={formOne.email}
                onChange={(e) =>
                  setFormOne({ ...formOne, email: e.target.value })
                }
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
        </div>

        {/* Form Two JSX */}
        <div className="section-center">
          <div className="form-container">
            <h3>Form Two Challenge</h3>
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
              <input value={formTwo.details.city} onChange={handleCityChange} />
            </div>
            <div className="form-input">
              <label>Passion:</label>
              <input
                value={formTwo.details.passion}
                onChange={handlePassionChange}
              />
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

        {/* Form Three JSX */}
        <div className="section-center">
          <div className="form-container">
            <h3>Form Three Challenge</h3>
            <div className="form-input">
              <label>Name:</label>
              <input value={formThree.person} onChange={handlePersonChange} />
            </div>
          </div>
          <div>
            <p className="bold">RESULT: {formThree.person}</p>
            <p>Expected Result: name</p>
            <p>Example: Jane Smith</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Three;

/*
Form 1
Treat any JavaScript object that you put into state as "immutable", meaning read-only.
Replace it! Don't mutate it!
Use the spread operator to make a copy of the old state, and to update the new state.

Form 2
Nested objects require a deep copy!
You need to create a copy of the object you're updating, as well as any object "containing" it on the way updwards.

Form 3 --> Obj.is static method --> go read about this!
You mutated an existing object, and passed it back to the setState function.
You should replace it with a new object.

All of the above --> The same goes for arrays!
*/
