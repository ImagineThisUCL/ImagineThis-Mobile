import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import ImageButton from "../reusables/ImageButton"

class Reachout extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 180}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Personal nudge</P>
</View>
<View style={{marginTop: 23}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 26, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'center'}}>Let your care network know how you are!</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage1')}
style={{padding: 10}}
imageStyle={{width: 50, height: 49}}
imageSrc={require('../../assets/img/3.png')}/>
</View>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('WellbeingNetwork')}
style={{padding: 10}}
imageStyle={{width: 50, height: 47}}
imageSrc={require('../../assets/img/4.png')}/>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Reachout