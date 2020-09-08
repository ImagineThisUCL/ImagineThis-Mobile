import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class Home extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(27,27,27,1.0)"}}>
<View style={{marginTop: 45,marginLeft: 24, marginRight: 62}}>
<P style={{fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Home</P>
</View>
<View style={{marginTop: 20,marginLeft: 24, marginRight: 27}}>
<InputField
     placeholder='Search...'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 10.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 20,marginLeft: 25, marginRight: 26}}>
<Image
source={require('../../assets/img/1.png')}
style={{width: 309, height: 199}}
/>
</View>
<View style={{marginTop: 21,marginLeft: 25, marginRight: 26}}>
<Image
source={require('../../assets/img/2.png')}
style={{width: 309, height: 191}}
/>
</View>
<View style={{marginTop: 26,marginLeft: 25, marginRight: 26}}>
<Image
source={require('../../assets/img/3.png')}
style={{width: 309, height: 178}}
/>
</View>
            </ScrollView>
        )
    }
}
export default Home