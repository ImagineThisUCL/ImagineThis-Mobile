import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class CarersTrust extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 18}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Your Carers Trust Support{"\n"}Web site</P>
</View>
<View style={{marginTop: 11}}>
<Image
source={require('../../assets/img/24.png')}
style={{width: 414, height: 549}}
/>
</View>
            </ScrollView>
        )
    }
}
export default CarersTrust