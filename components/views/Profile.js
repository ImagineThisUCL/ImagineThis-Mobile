import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import Toggle from "../reusables/Toggle"

class Profile extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)"}}>
<View style={{marginTop: 23,marginLeft: 20, marginRight: 41}}>
<P style={{fontSize: 23.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Profile</P>
</View>
<View style={{marginTop: 14,marginLeft: 127, marginRight: 127}}>
<Image
source={require('../../assets/img/6.png')}
style={{width: 106, height: 106}}
/>
</View>
<View style={{marginTop: 30,marginLeft: 43, marginRight: 43}}>
<P style={{fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>Welcome, Jacob Everdoing</P>
</View>
<View style={{marginTop: 5,marginLeft: 43, marginRight: 43}}>
<P style={{fontSize: 14.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>You have been with homer for 5 years</P>
</View>
<View style={{marginTop: 5,marginLeft: 122, marginRight: 122}}>
<Button
onPress={() => this.props.navigation.navigate('LogIn')}
   style={{backgroundColor:"rgba(109,190,41,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0, borderColor: "rgba(255,255,255,1.0)" ,borderWidth: 2.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Logout</Button>
</View>
<View style={{marginTop: 30,marginLeft: 23, marginRight: 63}}>
<P style={{fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Settings</P>
</View>
<View style={{marginTop: 5,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Show notifications</P>
</View>
<View style={{flex: 1}}>
<Toggle
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor="white"
ios_backgroundColor="#3e3e3e"
//    onValueChange={toggleSwitch}
//    value={isEnabled}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 15}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Ignore messages</P>
</View>
<View style={{flex: 1}}>
<Toggle
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor="white"
ios_backgroundColor="#3e3e3e"
//    onValueChange={toggleSwitch}
//    value={isEnabled}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 18}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Enable taking photos</P>
</View>
<View style={{flex: 1}}>
<Toggle
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor="white"
ios_backgroundColor="#3e3e3e"
//    onValueChange={toggleSwitch}
//    value={isEnabled}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 17}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Stay logged in 24h</P>
</View>
<View style={{flex: 1}}>
<Toggle
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor="white"
ios_backgroundColor="#3e3e3e"
//    onValueChange={toggleSwitch}
//    value={isEnabled}
/>
</View>
</View>
</View>

</View>
<View style={{marginTop: 21,marginLeft: 63, marginRight: 64}}>
<Button
onPress={() => this.props.navigation.navigate('Activity')}
   style={{backgroundColor:"rgba(109,190,41,1.0)", marginTop: base.margin, minWidth: 233, borderRadius: 100.0, borderColor: "rgba(255,255,255,1.0)" ,borderWidth: 2.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>View Activity History</Button>
</View>
            </ScrollView>
        )
    }
}
export default Profile