import React, { useState } from 'react';

function Counter() {
    // Initialize the state with a default value of 0
    const [count, setCount] = useState(0);

    // Function to increment the counter
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default Counter;