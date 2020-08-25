import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class Wellbeingrating extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 13,marginLeft: 17, marginRight: 18}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Torfaen resources{"\n"}v wellbeing rating</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 17}}>
<P style={{fontSize: 26.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Resource</P>
<P style={{fontSize: 26.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Rating{"\n"}</P>
 </View>
<View style={{marginTop: 12,marginLeft: 10, marginRight: 9}}>
<View style={{borderRadius: 10.0, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 14}}>
<View style={{flex: 5}}>
<InputField
placeholder='Coffee at the hub'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>5</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>3</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 5}}>
<InputField
placeholder='WhatsApp Groups'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>2</P>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 246, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>On the scale  (0=lowest score, {"\n"}10=highest score).</P>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Wellbeingrating