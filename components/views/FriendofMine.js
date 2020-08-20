import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'

class FriendofMine extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 18}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Friend of Mine</P>
</View>
<View style={{marginTop: 35}}>
<Image
source={require('../../assets/img/16.png')}
style={{width: 415, height: 262}}
/>
</View>
            </ScrollView>
        )
    }
}
export default FriendofMine