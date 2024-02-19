import React, { useState } from 'react';

function initializeTodos() {
  const todos = [];
  for (let i = 0; i < 10; i++) {
    todos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }

  console.log('todos', todos);
  return todos;
}

const Four = () => {
  // Wrong way!
  // const [todos, setTodos] = useState(initializeTodos());

  // Correct way!
  const [todos, setTodos] = useState(initializeTodos);
  const [text, setText] = useState('');

  return (
    <main>
      <div className="section">
        <div className="section-center">
          <h2>Initialize the Todo List</h2>
          <p>
            Open your console, then enter a new item on the todo list. The todo
            list should only log once on initial render. Is the result what you
            expected?
            <br />
            Correct the logic in your code.
          </p>
        </div>

        <div className="section-center">
          <div className="form-container">
            <div className="form-input">
              <input value={text} onChange={(e) => setText(e.target.value)} />
              <button
                onClick={() => {
                  setText('');
                  setTodos([
                    {
                      id: todos.length,
                      text: text,
                    },
                    ...todos,
                  ]);
                }}
                className="btn"
              >
                Add
              </button>
            </div>
          </div>
          <div className="result">
            <h3>Results</h3>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Four;

/*
When you initialize state with a function, and CALL that function on initializtion, the function will be called on every render.
This is not what you want.
This is considered wasteful and expensive.
Instead, you should pass the function itself to useState, and let React call it only once, when the component is first rendered.
*/
