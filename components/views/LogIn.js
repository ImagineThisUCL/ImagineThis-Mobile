import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class LogIn extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)"}}>
<View style={{marginTop: 44,marginLeft: 101, marginRight: 101}}>
<Image
source={require('../../assets/img/14.png')}
style={{width: 158, height: 145}}
/>
</View>
<View style={{marginTop: 29,marginLeft: 26, marginRight: 34}}>
<InputField
     label='Email'
     labelStyle={{color: "rgba(255,255,255,1.0)", marginBottom: 5}}
     placeholder='test@figma.com'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 20.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 12,marginLeft: 26, marginRight: 34}}>
<InputField
     label='Password'
     labelStyle={{color: "rgba(255,255,255,1.0)", marginBottom: 5}}
     placeholder='********'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 20.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 35,marginLeft: 75, marginRight: 76}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'Browse'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 209, borderRadius: 100.0}}
   textStyle={{color: "rgba(109,190,41,1.0)", fontSize: 22.0}}
>Log in</Button>
</View>
<View style={{marginTop: 28,marginLeft: 10, marginRight: 10}}>
<Image
source={require('../../assets/img/15.png')}
style={{width: 340, height: 2}}
/>
</View>
<View style={{marginTop: 28,marginLeft: 27, marginRight: 34}}>
<P style={{fontSize: 26.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>New to Homer?</P>
</View>
<View style={{marginTop: 28,marginLeft: 75, marginRight: 76}}>
<Button
onPress={() => this.props.navigation.navigate('Register')}
   style={{backgroundColor:"rgba(109,190,41,1.0)", marginTop: base.margin, minWidth: 209, borderRadius: 100.0, borderColor: "rgba(255,255,255,1.0)" ,borderWidth: 1.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 22.0}}
>Create account</Button>
</View>
            </ScrollView>
        )
    }
}
export default LogIn