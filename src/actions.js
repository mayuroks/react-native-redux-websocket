import ws  from './socket';

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
        type: 'SENT_MESSAGE',
        payload: data
    }
}

const receivedMsg = data => {
    return {
        type: 'RECEIVE_MESSAGE',
        payload: data
    }
}