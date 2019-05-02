import ws  from './socket';
import { MESSAGE_SENT, MESSAGE_RECEIVED } from './types';

// Send message
export const sendMsg = data => {
    return dispatch => {
        console.log("actions send message");
        dispatch(sentMsg(data));
        ws.send(data);
    }
}

export const recieveMsg = data => {
    return dispatch => {
        console.log("actions receive message");
        dispatch(receivedMsg(data));
    }
}

const sentMsg = data => {
    return {
        type: MESSAGE_SENT,
        payload: data
    }
}

const receivedMsg = data => {
    return {
        type: MESSAGE_RECEIVED,
        payload: data
    }
}