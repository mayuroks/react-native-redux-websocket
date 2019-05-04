/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Text} from 'react-native';
import store from './src/store';
import Home from './src/components/Home';
import MyWebSocket from './src/components/MyWebSocket';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
                <MyWebSocket />
            </Provider>
        );
    }
}
