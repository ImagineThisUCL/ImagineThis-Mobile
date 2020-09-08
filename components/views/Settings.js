import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import Toggle from "../reusables/Toggle"

class Settings extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(27,27,27,1.0)"}}>
<View style={{marginTop: 45,marginLeft: 20, marginRight: 66}}>
<P style={{fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Settings</P>
</View>
<View style={{marginTop: 34,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Show notifications</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Ignore messages</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Enable taking photos</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Stay logged in 24h</P>
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
<View style={{marginTop: 26,marginLeft: 20, marginRight: 66}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Permissions</P>
</View>
<View style={{marginTop: 8,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 7}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Allow Mic</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Allow Camera</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Allow Photos</P>
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
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(60,60,60,1.0)", textAlign: 'left', flex: 1 }}>Allow Location</P>
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
<View style={{marginTop: 34,marginLeft: 122, marginRight: 122}}>
<Button
   style={{backgroundColor:"rgba(221,41,1,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Logout</Button>
</View>
            </ScrollView>
        )
    }
}
export default Settings