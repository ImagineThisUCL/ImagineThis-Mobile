import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import GoogleMap from "../reusables/GoogleMap"

class WellbeingbyActivity extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 31,marginLeft: 19, marginRight: 65}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Web resource of Local Activties by how well they make people feel </P>
</View>
<View style={{marginTop: 31,marginLeft: 6, marginRight: 6}}>
<GoogleMap />
</View>
<View style={{marginTop: 0,marginLeft: 145, marginRight: 185}}>
<Button
   style={{backgroundColor:"rgba(15,9,78,1.0)", marginTop: base.margin, minWidth: 84}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 14.0}}
circleDiameter={84}>Click 
Here</Button>
</View>
<View style={{marginTop: 18,marginLeft: 187, marginRight: 150}}>
<Button
onPress={() => this.props.navigation.navigate('Wellbeingrating')}
   style={{backgroundColor:"rgba(15,9,78,1.0)", marginTop: base.margin, minWidth: 77}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 14.0}}
circleDiameter={77}>Click 
Here</Button>
</View>
            </ScrollView>
        )
    }
}
export default WellbeingbyActivity