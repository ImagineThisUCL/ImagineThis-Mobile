import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class DementiaSupport2 extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 15,marginLeft: 17, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Dementia Support</P>
</View>
<View style={{marginTop: 17,marginLeft: 10, marginRight: 9}}>
<Image
source={require('../../assets/img/68.png')}
style={{width: 395, height: 568}}
/>
</View>
            </ScrollView>
        )
    }
}
export default DementiaSupport2