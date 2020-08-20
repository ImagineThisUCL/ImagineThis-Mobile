import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import Dropdown from "../reusables/Dropdown"

class AutoPopulatedMesage2 extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 14}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Actvity Support Message</P>
</View>
<View style={{marginTop: 20}}>
<View style={{borderRadius: 32.0 , marginLeft: 12, marginRight: 12, padding: 0, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(0,0,0,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 49, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>You appear to be actively interested in </P>
</View>
<View style={{flexDirection: 'row', marginTop: 28, justifyContent: "center"}}>
<Dropdown
items={[
{key: 'option1', label: 'Football'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
<View style={{flexDirection: 'row', marginTop: 13, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Are you interested to join that activities online group to learn what is happening locally</P>
</View>
<View style={{flexDirection: 'row', marginTop: 0}}>
<Dropdown
items={[
{key: 'option1', label: 'Yes'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
<View style={{flexDirection: 'row', marginTop: 10, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Click send if you want carer support workers to help you do this or click cancel if you do not </P>
</View>
</View>

</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 27}}>
<Button
onPress={() => this.props.navigation.navigate('WellbeingNetwork')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Cancel</Button>
<Button
onPress={() => this.props.navigation.navigate('MessagesSent')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Send</Button>
 </View>
            </ScrollView>
        )
    }
}
export default AutoPopulatedMesage2