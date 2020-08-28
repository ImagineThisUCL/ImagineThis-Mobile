import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class Torfaen extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 18,marginLeft: 17, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Your Torfaen Support {"\n"}Website</P>
</View>
<View style={{marginTop: 25,marginLeft: 6, marginRight: 6}}>
<Image
source={require('../../assets/img/69.png')}
style={{width: 402, height: 551}}
/>
</View>
            </ScrollView>
        )
    }
}
export default Torfaen