import { combineReducers } from 'redux';

INITIAL_STATE = {
    receivedMsg: "None"
}
const socketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    socket: socketReducer
})