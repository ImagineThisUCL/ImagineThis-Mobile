import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import InputField from '../reusables/InputField'

class Informationtopopulatmessages extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 17}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Set up your primary care network  text messaging template on the next three screens.  {"\n"}Do this initially with your carer support worker.  Once saved you can change these at any time{"\n"}{"\n"}Who do like to talk to?</P>
</View>
<View style={{marginTop: 16}}>
<View style={{borderRadius: 18.0 , marginLeft: 8, marginRight: 8, padding: 0, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(13,17,57,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 32, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Support Worker'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 5, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07456467890'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 4, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Robin'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 5, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07445678234'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 2, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Jim'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07431127804'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 17}}>
<Button
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 21, borderRadius: 50.0, borderColor: "rgba(0,0,0,1.0)" ,borderWidth: 1.0}}
   textStyle={{color: "rgba(0,0,0,1.0)", fontSize: 20.0}}
>+</Button>
</View>
</View>

</View>
<View style={{marginTop: 15}}>
<P style={{fontSize: 24.0, color: "rgba(233,233,233,1.0)", textAlign: 'left'}}>The name you use for texts:</P>
</View>
<View style={{marginTop: 0}}>
<InputField
placeholder='Jo'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 37}}>
<Button
onPress={() => this.props.navigation.navigate('SetUp')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('CareNetworkPage')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default Informationtopopulatmessages