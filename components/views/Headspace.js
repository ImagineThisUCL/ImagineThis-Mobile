import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class Headspace extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 15,marginLeft: 17, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Headspace</P>
</View>
<View style={{marginTop: 34,marginLeft: 11, marginRight: 11}}>
<Image
source={require('../../assets/img/91.png')}
style={{width: 392, height: 505}}
/>
</View>
            </ScrollView>
        )
    }
}
export default Headspace