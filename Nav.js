import { StackNavigator, TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import FirebaseTest from './FirebaseTest'
import Location from './Location'
import MapComp from './Map'

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
        screen: MapComp
    },
    FirebaseTest: {
        screen: FirebaseTest
    },
    LocationTest: {
        screen: Location
    },
});

export default Nav = StackNavigator({
    Tabs: {
        screen: Tabs
    }

});
