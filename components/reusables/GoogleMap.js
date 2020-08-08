import { View, StyleSheet} from "react-native"
import React, { Component } from "react"
import MapView ,{ PROVIDER_GOOGLE }from 'react-native-maps';

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: 110,
        height: 175,
    }
})


export default class GoogleMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 51.50873,
                    longitude: -0.12574,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}/>
            </View>
        )
    }
}
