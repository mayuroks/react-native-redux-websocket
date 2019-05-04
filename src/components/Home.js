import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import ws, { WS_URL } from '../socket';
import { sendMsg, recieveMsg } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        input: ''
    }

    constructor(props) {
        super(props);
        console.log("Home", props);
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
                <Text
                    style={styles.header}
                >
                    WebSocket Echo
                </Text>
                <Text
                    style={styles.received}
                >
                    WebSocket Server: {"\n"}{WS_URL}
                </Text>
                <Text
                    style={styles.received}
                >
                    Sent on WebSocket: {"\n"}
                </Text>
                <TextInput
                    style={styles.editText}
                    onChangeText={this._changeText.bind(this)}
                >
                </TextInput>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this._sendMsg.bind(this, msg)}
                >
                    <Text
                        style={styles.button}
                    >
                        Send
                    </Text>
                </TouchableOpacity>
                <Text
                    style={styles.received}
                >
                    Received from WebSocket:{"\n\n"}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#512DA8',
    },
    button: {
        fontSize: 20,
        borderRadius: 50,
        color: 'white',
        fontWeight: '800'
    },
    buttonContainer: {
        backgroundColor: '#8BC34A',
        borderRadius: 8,
        padding: 16,
        marginTop: 16
    },
    received: {
        marginTop: 40,
        fontSize: 24,
        color: 'white',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20
    },
    header: {
        fontSize: 36,
        color: 'white',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '800'
    },
    editText: {
        height: 40,
        backgroundColor: '#f5f5f5',
        color: 'black',
        fontSize: 18,
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        height: 60,
    }
});