import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import InputField from '../reusables/InputField'
import ImageButton from "../reusables/ImageButton"

class CFA_Support extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{marginTop: 48}}>
<View style={{borderRadius: 0.0 , margin: 0, padding: 10, backgroundColor: "rgba(0,0,0,0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 24, height: 15}}
imageSrc={require('../../assets/img/14.png')}/>
</View>
<View style={{flex: 2}}>
<P style={{fontSize: 20.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Support</P>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 60, justifyContent: "center"}}>
<P style={{fontSize: 18.0, color: "rgba(112,112,112,1.0)", textAlign: 'left'}}>What do you need from us ?</P>
</View>
<View style={{flexDirection: 'row', marginTop: 27, justifyContent: "center"}}>
<InputField
placeholder='Email'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 0.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 39, justifyContent: "center"}}>
<InputField
placeholder='Enter your problem'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 0.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 274, justifyContent: "center"}}>
<Button
   style={{backgroundColor:"rgba(255,155,112,1.0)", marginTop: base.margin, borderRadius: 25.0}}
   textStyle={{color: "rgba(249,244,242,1.0)", fontSize: 20.0}}
>Send</Button>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default CFA_Support