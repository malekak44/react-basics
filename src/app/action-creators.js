import { RESET, INCREMENT, DECREMENT } from './actions';

export const reset = () => {
    return (dispatch) => {
        dispatch({
            type: RESET
        });
    }
}

export const increment = () => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT
        });
    }
}

export const decrement = () => {
    return (dispatch) => {
        dispatch({
            type: DECREMENT
        });
    }
}