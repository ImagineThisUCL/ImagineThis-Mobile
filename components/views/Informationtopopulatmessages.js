import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'
import ImageButton from "../reusables/ImageButton"

class Informationtopopulatmessages extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 17,marginLeft: 19, marginRight: 24}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Set up your primary care network  text messaging template on the next three screens.  {"\n"}Do this initially with your carer support worker.  Once saved you can change these at any time{"\n"}{"\n"}Who do like to talk to?</P>
</View>
<View style={{marginTop: 16,marginLeft: 8, marginRight: 14}}>
<View style={{borderRadius: 18.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(13,17,57,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 32, justifyContent: "center"}}>
<InputField
     label='Name :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Support Worker'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 5}}>
<View style={{flex: 7}}>
<InputField
     label='Contact no :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='07456467890'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/74.png')}
style={{width: 19, height: 25}}
/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 4, justifyContent: "center"}}>
<InputField
     label='Name :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Robin'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 5}}>
<View style={{flex: 7}}>
<InputField
     label='Contact no :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='07445678234'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/75.png')}
style={{width: 19, height: 27}}
/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 2, justifyContent: "center"}}>
<InputField
     label='Name :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='Jim'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 7}}>
<InputField
     label='Contact no :'
     labelStyle={{color: "rgba(113,113,113,1.0)", marginBottom: 5}}
     placeholder='07431127804'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/76.png')}
style={{width: 19, height: 27}}
/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 9}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 29, height: 29}}
imageSrc={require('../../assets/img/77.png')}/>
</View>
</View>

</View>
<View style={{marginTop: 15,marginLeft: 27, marginRight: 25}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(233,233,233,1.0)", textAlign: 'left', flex: 1 }}>The name you use for texts:</P>
</View>
<View style={{marginTop: 10,marginLeft: 31, marginRight: 195}}>
<InputField
     placeholder='Jo'
     inputStyle={{color: "rgba(0,0,0,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 5.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 27}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'SetUp'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>No Thanks</Button>
<Button
onPress={() => this.props.navigation.navigate('CareNetworkPage')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
 </View>
            </ScrollView>
        )
    }
}
export default Informationtopopulatmessages