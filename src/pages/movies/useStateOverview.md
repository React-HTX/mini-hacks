# useState Overview
## Setting Up Your Next.js Project

If you haven't already, make sure you download the repo mini-hacks and checkout the branch useStateTutorial:

If you want to run the app, in the project root run:
```bash
npm run dev
```

## Welcome to the useState Tutorial

What is useState?

The useState hook is a fundamental part of React functional components that allows you to add state to your functional components. It's commonly used to store and update component-specific data

## Step 1: Import the useState Hook

Make sure to import the useState hook at the beginning of your functional component file. You can do this by adding the following line:

```bash
import React, { useState } from 'react';
```

## Step 2: Declare State Variables

Declare state variables using the useState hook. The useState function returns an array with two elements: the current state value and a function that lets you update it.

```bash
import React, { useState } from 'react';

function ExampleComponent() {
  // Syntax: const [stateVariable, setStateFunction] = useState(initialValue);
  const [count, setCount] = useState(0); // Example state variable with an initial value of 0
  const [text, setText] = useState(''); // Example state variable for storing text with an initial value of an empty string

  // Your component logic goes here

  return (
    <div>
      {/* Display the state variables */}
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  );
}
```

## Step 3: Accessing State Variables

You can access the state variables (count and text in this example) directly in your component's JSX. Whenever the state changes, React will automatically re-render the component.

## Step 4: Updating State

To update the state, use the function returned by useState. In the example below, clicking a button increments the count state:

```bash
function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Function to update count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to trigger the state update */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

## Step 5: Handling Complex State

For more complex state objects, you can use the spread operator to ensure that you don't lose the previous state:

```bash
function ExampleComponent() {
  const [user, setUser] = useState({ name: '', age: 0 });

  // Function to update user's name
  const handleNameChange = (newName) => {
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {/* Input to update the user's name */}
      <input
        type="text"
        value={user.name}
        onChange={(e) => handleNameChange(e.target.value)}
      />
    </div>
  );
}
```

And that's it! You've successfully used the useState hook in your React functional component. This simple tutorial should help you get started with managing state in your React applications.