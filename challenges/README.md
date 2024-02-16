# Spinup Instructions

Be sure to clone this repo from Github, `cd` into the project, then open this up in your local code editor.

### `npm install` `npm start`

Once the project is open in your code editor, go to your terminal and run `npm install`. When the install is complete, be sure to run `npm start` in your terminal.

### Project Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The only additional install is `"react-router-dom": "^6.21.3",`.

# useState - Common Mistakes & Troubleshooting

## DON'T FORGET!

- Hooks can only be used at the TOP LEVEL of your component!
- CANNOT call inside loops or conditions!

## Anatomy

`const [state, setState] = useState(initialState)`

### Parameters

`initialState` --> Any value type you want! Only read at initial render - after this it is ignored.

`[state, ...]` --> Current state. Matches `initialState` on initial render.

`[..., setState]` --> Updates state AND triggers the re-render.
`setState(nextState)` --> function!

### Naming Convention

Industry standard - NOT REQUIRED!

`const [movies, setMovies] = useState([]);` --> industry standard

`const [movies, banana] = useState([]);` --> still works!

## Example

````import { useState } from 'react';

export default function myComponent() {
    const [name, setName] = useState('');

    function handleNameChange() {
        setName('John');
    }
}

//... rest of code.```



### EXTRA

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
````
