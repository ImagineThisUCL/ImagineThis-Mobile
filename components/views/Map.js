import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import GoogleMap from "../reusables/GoogleMap"

class Map extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)" }}>
                <View style={{ marginTop: 33, marginLeft: 23, marginRight: 18 }}>
                    <P style={{ fontSize: 26.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>View the task on map</P>
                </View>
                <View style={{ marginTop: 30, marginLeft: 17, marginRight: 18 }}>
                    <GoogleMap />
                </View>
                <View style={{ marginTop: 59, marginLeft: 23, marginRight: 19 }}>
                    <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Task owner:</P>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                    <Image
                        source={require('../../assets/img/16.png')}
                        style={{ width: 106, height: 106 }}
                    />
                    <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Jacob Everdoing</P>
                </View>
            </ScrollView>
        )
    }
}
export default Map