import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../app/index';

const Redux = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const { reset, increment, decrement } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h1 className="section-header">Redux</h1>
            <h1 style={{ fontSize: "4rem" }}>{count}</h1>
            <div className="btn-container">
                <button onClick={increment}>Increase</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrease</button>
            </div>
        </div>
    );
};

export default Redux;