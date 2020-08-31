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
<View style={{marginTop: 14,marginLeft: 21, marginRight: 63}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Actvity Support Message</P>
</View>
<View style={{marginTop: 20,marginLeft: 12, marginRight: 7}}>
<View style={{borderRadius: 32.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(0,0,0,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 49, justifyContent: "center"}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>You appear to be actively interested in </P>
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
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Are you interested to join that activities online group to learn what is happening locally</P>
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
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Click send if you want carer support workers to help you do this or click cancel if you do not </P>
</View>
</View>

</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 27}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'WellbeingNetwork'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Cancel</Button>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'MessagesSent'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Send</Button>
 </View>
            </ScrollView>
        )
    }
}
export default AutoPopulatedMesage2