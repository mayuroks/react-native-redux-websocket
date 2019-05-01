/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 
1. Actions to send the events
2. WebSocket Component to receive events
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Text} from 'react-native';
import store from './src/store';
import SomeScreen from './src/components/SomeScreen';
import MyWebSocket from './src/components/MyWebSocket';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SomeScreen />
                <MyWebSocket />
            </Provider>
            // <Text>Hello</Text>
        );
    }
}



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     }
// });
