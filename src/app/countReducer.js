import { RESET, INCREMENT, DECREMENT } from './actions';

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case RESET:
            return state = 0;
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default countReducer;