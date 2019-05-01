import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import MyWebSocket from './MyWebSocket';
import ws from '../socket';
import { sendMsg, recieveMsg } from '../actions';
import { connect } from 'react-redux';

class SomeScreen extends Component {
    constructor(props) {
        super(props);
        console.log("SomeScreen", props);
    }

    _sendMsg(msg) {
        this.props.sendMsg(JSON.stringify(msg));
    }

    componentDidMount() {
        ws.addEventListener('open', event => {
            // ws.send("Socket opened");
            console.log("ws message received", event.data);
            this.props.recieveMsg(event.data);
        });

        // Can it be component specific?
        ws.addEventListener('message', event => {
            console.log("ws message received", event.data);
            this.props.recieveMsg(event.data);
        });
    }

    render() {
        const someMsg = { data: 'wow' }

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text
                        style={styles.welcome}
                        onPress={() => this._sendMsg(someMsg)}
                    >
                        Click to send message
                    </Text>
                </TouchableOpacity>
                <Text
                    style={styles.welcome}
                >
                    Received Message: {this.props.socket.recievedMsg}
                </Text>
                <MyWebSocket />
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        socket: state.socket
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMsg: data => {
            dispatch(sendMsg(data));
        },
        recieveMsg: data => {
            dispatch(recieveMsg(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    welcome: {
        fontSize: 18
    }
});