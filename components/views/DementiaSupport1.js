import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class DementiaSupport1 extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 15,marginLeft: 17, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>WhatsApp Groups</P>
</View>
<View style={{marginTop: 12,marginLeft: 7, marginRight: 6}}>
<Image
source={require('../../assets/img/66.png')}
style={{width: 401, height: 499}}
/>
</View>
            </ScrollView>
        )
    }
}
export default DementiaSupport1