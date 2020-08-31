import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class ZoomedImage extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(0,0,0,1.0)"}}>
<View style={{marginTop: 229,marginLeft: 0, marginRight: 0}}>
<Image
source={require('../../assets/img/5.png')}
style={{width: 360, height: 271}}
/>
</View>
            </ScrollView>
        )
    }
}
export default ZoomedImage