import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class CareNetworkPage extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 26,marginLeft: 11, marginRight: 27}}>
<P style={{fontSize: 25.0, fontWeight: '500', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>What activities do you like ?</P>
</View>
<View style={{marginTop: 23,marginLeft: 16, marginRight: 12}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(13,18,57,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 13, justifyContent: "center"}}>
<InputField
     label='Activity :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Coffee at the Hub'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<InputField
     label='Activity :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Chat about footie'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 10, justifyContent: "center"}}>
<InputField
     label='Activity :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Walk'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 7}}>
<Button
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 21, borderRadius: 50.0, borderColor: "rgba(0,0,0,1.0)" ,borderWidth: 1.0}}
   textStyle={{color: "rgba(0,0,0,1.0)", fontSize: 20.0}}
>+</Button>
</View>
</View>

</View>
<View style={{marginTop: 4,marginLeft: 16, marginRight: 56}}>
<InputField
     label='What is your postcode :'
     labelStyle={{color: "rgba(233,233,233,1.0)", marginBottom: 5}}
     placeholder='NP44'
     inputStyle={{color: "rgba(0,0,0,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 6,marginLeft: 19, marginRight: 35}}>
<P style={{fontSize: 18.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Your carer support worker will let you know what level of activity is good for your well-being.     Please enter it below.    Then click Save</P>
</View>
<View style={{marginTop: 9,marginLeft: 19, marginRight: 64}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(233,233,233,1.0)", textAlign: 'left', flex: 1 }}>Steps/day :</P>
</View>
<View style={{marginTop: 15,marginLeft: 19, marginRight: 76}}>
<InputField
     placeholder='1000'
     inputStyle={{color: "rgba(0,0,0,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 8,marginLeft: 19, marginRight: 238}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(233,233,233,1.0)", textAlign: 'left', flex: 1 }}>Contact/day:</P>
</View>
<View style={{marginTop: 8,marginLeft: 19, marginRight: 76}}>
<InputField
     placeholder='2'
     inputStyle={{color: "rgba(0,0,0,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{marginTop: 10,marginLeft: 21, marginRight: 114}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(233,233,233,1.0)", textAlign: 'left', flex: 1 }}>Carer support reference :</P>
</View>
<View style={{marginTop: 12,marginLeft: 21, marginRight: 158}}>
<InputField
     placeholder='Torfaen_GP'
     inputStyle={{color: "rgba(0,0,0,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'SetUp'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('StartPassiveTrackingandReporting')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default CareNetworkPage