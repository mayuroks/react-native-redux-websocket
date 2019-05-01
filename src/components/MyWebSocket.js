import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ws from '../socket';

class MyWebSocket extends Component {
    componentDidMount() {
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
        ws.close();
    }
}

export default MyWebSocket;
