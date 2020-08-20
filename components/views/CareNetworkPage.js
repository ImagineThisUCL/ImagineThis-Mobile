import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import InputField from '../reusables/InputField'

class CareNetworkPage extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 26}}>
<P style={{fontSize: 25.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>What activities do you like ?</P>
</View>
<View style={{marginTop: 23}}>
<View style={{borderRadius: 10.0 , marginLeft: 16, marginRight: 16, padding: 0, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(13,18,57,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 13, justifyContent: "center"}}>
<InputField
label='Activity :'
placeholder='Coffee at the Hub'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<InputField
label='Activity :'
placeholder='Chat about footie'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 10, justifyContent: "center"}}>
<InputField
label='Activity :'
placeholder='Walk'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 7}}>
<Button
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 21, borderRadius: 50.0, borderColor: "rgba(0,0,0,1.0)" ,borderWidth: 1.0}}
   textStyle={{color: "rgba(0,0,0,1.0)", fontSize: 20.0}}
>+</Button>
</View>
</View>

</View>
<View style={{marginTop: 4}}>
<InputField
label='What is your postcode :'
placeholder='NP44'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{marginTop: 6}}>
<P style={{fontSize: 18.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Your carer support worker will let you know what level of activity is good for your well-being.     Please enter it below.    Then click Save</P>
</View>
<View style={{marginTop: 9}}>
<P style={{fontSize: 24.0, color: "rgba(233,233,233,1.0)", textAlign: 'left'}}>Steps/day :</P>
</View>
<View style={{marginTop: 15}}>
<InputField
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{marginTop: 8}}>
<P style={{fontSize: 24.0, color: "rgba(233,233,233,1.0)", textAlign: 'left'}}>Contact/day:</P>
</View>
<View style={{marginTop: 8}}>
<InputField
placeholder='2'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{marginTop: 10}}>
<P style={{fontSize: 24.0, color: "rgba(233,233,233,1.0)", textAlign: 'left'}}>Carer support reference :</P>
</View>
<View style={{marginTop: 12}}>
<InputField
placeholder='Torfaen_GP'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
<Button
onPress={() => this.props.navigation.navigate('SetUp')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('StartPassiveTrackingandReporting')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default CareNetworkPage