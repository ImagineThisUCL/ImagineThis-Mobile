import { View, StyleSheet} from "react-native"
import React, { Component } from "react"
import MapView ,{ PROVIDER_GOOGLE }from 'react-native-maps'
import propTypes from 'prop-types'

import base from "../../assets/baseStyle"

const MAP_WIDTH = base.window.width
const MAP_HEIGHT = base.window.height / 1.4

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
    }
})


export default class GoogleMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView 
                    style={[styles.mapStyle, this.props.mapStyle]}
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

GoogleMap.propTypes = {
    mapStyle: propTypes.object, // override default styles, e.g. set fixed width and height
}
