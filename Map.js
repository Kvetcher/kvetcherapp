import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native'
import MapView from 'react-native-maps';

const MapComp = (props) => {
  return (
    <View style={styles.container} >
      <MapView
        style={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
      }}
        initialRegion={{
        latitude: 40.705046, //props.lat
        longitude: -74.009178, //props.long
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 40.705046,
          longitude: -74.009178
        }}
      >
      </MapView.Marker>
      </MapView>
    </View>
  )
}

export default MapComp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden'
  }
})
