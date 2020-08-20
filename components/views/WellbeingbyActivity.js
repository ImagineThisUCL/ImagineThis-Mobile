import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import GoogleMap from "../reusables/GoogleMap"

class WellbeingbyActivity extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 31}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Web resource of Local Activties by how well they make people feel </P>
</View>
<View style={{marginTop: 0}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Web resource of Local Activties by how well they make people feel </P>
</View>
<View style={{marginTop: 31}}>
<GoogleMap />
</View>
<View style={{marginTop: 0}}>
<GoogleMap />
</View>
            </ScrollView>
        )
    }
}
export default WellbeingbyActivity