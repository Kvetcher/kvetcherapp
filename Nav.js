import { StackNavigator, TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import FirebaseTest from './FirebaseTest'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const FakeComponent = () => {
    return (
        <View>
            <Text>
                hi bark meow
            </Text>
        </View>
    );
};


const Tabs = TabNavigator({
    MapTest: {
        screen: FakeComponent
    },
    FirebaseTest: {
        screen: FirebaseTest
    },
});

export default Nav = StackNavigator({
    Tabs: {
        screen: Tabs
    }

});
