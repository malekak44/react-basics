import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    RESET: 'reset',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.RESET:
            return { count: 0 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}


export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function reset() {
        dispatch({ type: ACTIONS.RESET });
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    return (
        <div>
            <h1 className="section-header">Reducer</h1>
            <h1 style={{ fontSize: "4rem" }}>{state.count}</h1>
            <div className="btn-container">
                <button onClick={increment}>Increase</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrease</button>
            </div>
        </div>
    );
}