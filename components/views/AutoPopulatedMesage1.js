import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import Toggle from "../reusables/Toggle"
import Dropdown from "../reusables/Dropdown"

class AutoPopulatedMesage1 extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 14,marginLeft: 21, marginRight: 63}}>
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Auto formatted Text Message</P>
</View>
<View style={{marginTop: 7,marginLeft: -1, marginRight: 4}}>
<View style={{borderRadius: 32.0, padding: 10, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(0,0,0,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 27}}>
<View style={{flex: 1}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Hello </P>
</View>
<View style={{flex: 3}}>
<Dropdown
items={[
{key: 'option1', label: 'Jim'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
<View style={{flex: 2}}>
<Dropdown
items={[
{key: 'option1', label: 'OK'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
</View>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Just to let you know I am </P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 25}}>
<View style={{flex: 3}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>How about on               </P>
</View>
<View style={{flex: 3}}>
<Dropdown
items={[
{key: 'option1', label: '22/12'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 22}}>
<View style={{flex: 1}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>at </P>
</View>
<View style={{flex: 3}}>
<Dropdown
items={[
{key: 'option1', label: '10 a.m.'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 19}}>
<View style={{flex: 3}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>we have a {"\n"}</P>
</View>
<View style={{flex: 5}}>
<Dropdown
items={[
{key: 'option1', label: 'Chat about footie'},
{key: 'option2', label: 'Placeholder'},
]}
containerStyle={{borderRadius:0.0, backgroundColor: "rgba(255,255,255,1.0)"}}
textStyle={{fontSize: 24.0, color: "rgba(0,0,0,1.0)"}}/>

</View>
</View>
<View style={{flexDirection: 'row', marginTop: 24, justifyContent: "center"}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>All the best.  Jo {"\n"}</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 24}}>
<View style={{flex: 6}}>
<P style={{fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Include Wellbeing Diary {"\n"}</P>
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
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 22}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'WellbeingNetwork'})}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Cancel</Button>
<Button
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage2')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>Send</Button>
 </View>
            </ScrollView>
        )
    }
}
export default AutoPopulatedMesage1