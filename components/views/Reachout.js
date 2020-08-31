import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import ImageButton from "../reusables/ImageButton"

class Reachout extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 180,marginLeft: 20, marginRight: 63}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Personal nudge</P>
</View>
<View style={{marginTop: 23,marginLeft: 11, marginRight: 11}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 26, justifyContent: "center"}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'center', flex: 1 }}>Let your care network know how you are!</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage1')}
style={{padding: 10}}
imageStyle={{width: 50, height: 49}}
imageSrc={require('../../assets/img/105.png')}/>
</View>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'WellbeingNetwork'})}
style={{padding: 10}}
imageStyle={{width: 50, height: 47}}
imageSrc={require('../../assets/img/106.png')}/>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Reachout