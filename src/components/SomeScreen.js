import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import MyWebSocket from './MyWebSocket';
import ws from '../socket';
import { sendMsg, recieveMsg } from '../actions';
import { connect } from 'react-redux';

class SomeScreen extends Component {

    state = {
        input: 'default'
    }

    constructor(props) {
        super(props);
        console.log("SomeScreen", props);
    }

    _sendMsg(msg) {
        this.props.sendMsg(JSON.stringify(msg));
    }

    _changeText(text) {
        this.setState({ input: text });
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
        const msg = this.state.input;
        const { receivedMsg } = this.props.socket;
        console.log("receivedMsg render", receivedMsg);

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.editText}
                    onChangeText={this._changeText.bind(this)}
                >
                </TextInput>
                <TouchableOpacity
                    onPress={this._sendMsg.bind(this, msg)}
                >
                    <Text
                        style={styles.welcome}
                    >
                        Click to send message
                    </Text>
                </TouchableOpacity>
                <Text
                    style={styles.received}
                >
                    Message from WebSocket:{"\n"}
                    {receivedMsg}
                </Text>
                
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
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
        fontSize: 18,
        marginTop: 20
    },
    received: {
        marginTop: 80,
        fontSize: 18
    },
    editText: {
        height: 40,
        backgroundColor: '#f5f5f5',
        color: 'red',
        fontSize: 18,
        alignSelf: 'stretch',
        marginLeft: 40,
        marginRight: 40
    }
});