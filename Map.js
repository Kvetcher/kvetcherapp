import React, { Component } from 'react';

import MapView from 'react-native-maps';

const MapComp = (props) => {
  return (
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
    }}/>
  )
}

export default MapComp

