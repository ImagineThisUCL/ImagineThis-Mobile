import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class MessagesSent extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 18}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Total network contact history</P>
</View>
<View style={{marginTop: 15}}>
<View style={{borderRadius: 10.0 , marginLeft: 8, marginRight: 8, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 23}}>
<View style={{flex: 5}}>
<P style={{fontSize: 26.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Contacts </P>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/26.png')}
style={{width: 38, height: 40}}
/>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/27.png')}
style={{width: 43, height: 40}}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 7}}>
<View style={{flex: 5}}>
<InputField
placeholder='Jim Wright'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>11</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>5</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
placeholder='Carers Trust'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>6</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>3</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
placeholder='James Charles'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>12</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>2</P>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default MessagesSent