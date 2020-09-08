import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import GoogleMap from "../reusables/GoogleMap"
import Dropdown from "../reusables/Dropdown"

class Map extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(27,27,27,1.0)"}}>
<View style={{marginTop: 43,marginLeft: 19, marginRight: 22}}>
<P style={{fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Map</P>
</View>
<View style={{marginTop: 53,marginLeft: 19, marginRight: 20}}>
<Dropdown
items={[
{key: 'option1', label: 'London, England'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:5.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 17.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
<View style={{marginTop: 15,marginLeft: 19, marginRight: 20}}>
<GoogleMap />
</View>
            </ScrollView>
        )
    }
}
export default Map