import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class MessagesSent extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 18,marginLeft: 17, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Total network contact history</P>
</View>
<View style={{marginTop: 15,marginLeft: 8, marginRight: 14}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 14}}>
<View style={{flex: 5}}>
<P style={{fontSize: 26.0, fontWeight: '700', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Contacts </P>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/79.png')}
style={{width: 38, height: 40}}
/>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/80.png')}
style={{width: 43, height: 40}}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 5}}>
<InputField
     placeholder='Jim Wright'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>11</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>5</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
     placeholder='Carers Trust'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>6</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>3</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
     placeholder='James Charles'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>12</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>2</P>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default MessagesSent