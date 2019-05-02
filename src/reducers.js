import { combineReducers } from 'redux';
import { MESSAGE_SENT, MESSAGE_RECEIVED } from './types';

INITIAL_STATE = {
    receivedMsg: "None"
}
const socketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MESSAGE_SENT:
            return { ...state, receivedMsg: action.payload }
        case MESSAGE_RECEIVED:
            return { ...state, receivedMsg: action.payload }
        default:
            return state;
    }
}

export default combineReducers({
    socket: socketReducer
})