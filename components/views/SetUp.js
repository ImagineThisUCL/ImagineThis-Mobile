import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'

class SetUp extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 20,marginLeft: 23, marginRight: 0}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>CarerCare V0120-21: Set Up</P>
</View>
<View style={{marginTop: 19,marginLeft: 23, marginRight: 52}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>A carer support worker will have recommended this application to you.  They recognise that carers often forget to look after themselves.  This app has been designed to encourage you to do this.{"\n"}{"\n"}Occasionally it will nudge you to keep in contact with people you like to speak to, or persue activities with them.  It will also make you aware of new local groups with similar interests to yourself.    {"\n"}If you consent to this click{"\n"}Save</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 8}}>
<Button
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('Informationtopopulatmessages')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default SetUp