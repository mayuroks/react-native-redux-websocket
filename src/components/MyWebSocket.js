import React, { Component } from 'react';
import { View } from 'react-native';
import ws from '../socket';

class MyWebSocket extends Component {
    componentDidMount() {
        // App in foreground, start the connection
        ws.onerror = (e) => {
            console.log("ws error", e);
        }

        ws.onclose = (e) => {
            console.log("ws close", e);
        }
    }

    render() {
        return <View style={{ flex: 0 }}></View>
    }

    componentWillUnmount() {
        // App in background, close the connection
        ws.close();
    }
}

export default MyWebSocket;
