console.disableYellowBox = true;

import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Nav from './Nav';
import { AppRegistry } from 'react-native';

import * as firebase from 'firebase';



export default class kvetcher extends Component {
    render() {
        return (
            <Nav />
        );
    }
}
