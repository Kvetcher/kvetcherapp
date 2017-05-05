'use strict';
var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = ReactNative;
exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';
exports.examples = [
    {
        title: 'navigator.geolocation',
        render: function(): React.Element<any> {
            return <GeolocationExample />;
        },
    }
];
export default class Location extends React.Component {
    state = {
        initialPosition: 'unknown',
        currentPosition: 'unknown',
        initialLat:'unknown',
        initialLong:'unknown',
        currentLat:'unknown',
        currentLong:'unknown'
    };
    watchID: ?number = null;
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition, initialLat: position.coords.latitude, initialLong: position.coords.longitude});
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var currentPosition = JSON.stringify(position);
            this.setState({currentPosition, currentLat: position.coords.latitude, currentLong: position.coords.longitude});
        });
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
      console.log(this.state.currentLat)
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>Current Latitude: </Text>
                    {this.state.currentLat}
                </Text>
                <Text>
                    <Text style={styles.title}>Current Longitude: </Text>
                    {this.state.currentLong}
                </Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});
