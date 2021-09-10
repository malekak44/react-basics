import React, { useState } from 'react';
import '../styles/Counter.css';

export default function Counter() {
    let [value, setValue] = useState(0);

    return (
        <>
            <h1 className="section-header">Counter</h1>
            <h1 id="value">{value}</h1>
            <div className="btn-container">
                <button onClick={() => setValue(value + 1)}>Increase</button>
                <button onClick={() => setValue(0)}>Reset</button>
                <button onClick={() => setValue(value - 1)}>Decrease</button>
            </div>
        </>
    )
}