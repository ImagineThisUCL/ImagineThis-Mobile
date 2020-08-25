import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import Toggle from "../reusables/Toggle"

class StartPassiveTrackingandReporting extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 3,marginLeft: 18, marginRight: 25}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Initially, please set up your data sharing preferences with a carer support worker</P>
</View>
<View style={{marginTop: 29,marginLeft: 8, marginRight: 14}}>
<View style={{borderRadius: 10.0, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 13, justifyContent: "center"}}>
<Button
   style={{backgroundColor:"rgba(15,9,78,1.0)", marginTop: base.margin, width: 99}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
circleDiameter={99}>Start 
tracking</Button>
</View>
<View style={{flexDirection: 'row', marginTop: 7, justifyContent: "center"}}>
<P style={{fontSize: 18.0, color: "rgba(0,0,0,1.0)", textAlign: 'center'}}>When you click the above button the App will enable you to keep a weekly record of your well-being and allow you to understand the importance of social contact & movement in your life</P>
</View>
</View>

</View>
<View style={{marginTop: 8,marginLeft: 8, marginRight: 14}}>
<View style={{borderRadius: 20.0, padding: 0, backgroundColor: "rgba(0,0,0,0)",borderColor: "rgba(180,179,185,1.0)", borderWidth: 3.0}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 7}}>
<View style={{flex: 6}}>
<P style={{fontSize: 14.0, color: "rgba(255,255,255,1.0)", textAlign: 'center'}}> Click the OK button below to consent to the creation of a map that enables you and other app users to understand what support activties help people in your area.  By consenting you will not be sharing personally identifiable data.  All data used to create the map will be annonymised to protect your privacy.</P>
</View>
<View style={{flex: 2}}>
<Image
source={require('../../assets/img/33.png')}
style={{width: 114, height: 169}}
/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 8}}>
<View style={{flex: 1}}>
<P style={{fontSize: 18.0, color: "rgba(255,253,253,1.0)", textAlign: 'center'}}>OK?</P>
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
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 6}}>
<Button
onPress={() => this.props.navigation.navigate('SetUp')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('WeeklyConfirmWellbeing')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default StartPassiveTrackingandReporting