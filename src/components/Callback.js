import React, { useState, useCallback } from 'react';

const functionsContainer = new Set();

export default function Callback() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementCount = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const increaseNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);

    functionsContainer.add(incrementCount);
    functionsContainer.add(decrementCount);
    functionsContainer.add(increaseNumber);

    console.log(functionsContainer.size);
    console.log(functionsContainer);

    return (
        <div>
            <h1>{count}</h1>
            <h1>{number}</h1>
            <div className="btn-container">
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={increaseNumber}>Increase</button>
            </div>
        </div>
    )
}