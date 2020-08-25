import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'
import ImageButton from "../reusables/ImageButton"

class WellbeingNetwork extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 11,marginLeft: 15, marginRight: 69}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Your support network & apps</P>
</View>
<View style={{marginTop: 15,marginLeft: 9, marginRight: 6}}>
<View style={{borderRadius: 18.0, padding: 0, backgroundColor: "rgba(255,255,255,1.0)",borderColor: "rgba(13,17,57,1.0)", borderWidth: 1.0}}>
<View style={{flexDirection: 'row', marginTop: 17, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Support Worker'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07456467890'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/38.png')}
style={{width: 21, height: 25}}
/>
</View>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage1')}
style={{padding: 10}}
imageStyle={{width: 24, height: 23}}
imageSrc={require('../../assets/img/39.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Robin'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07445678234'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/40.png')}
style={{width: 21, height: 25}}
/>
</View>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage1')}
style={{padding: 10}}
imageStyle={{width: 24, height: 23}}
imageSrc={require('../../assets/img/41.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<InputField
label='Name :'
placeholder='Jim'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<InputField
label='Contact no :'
placeholder='07431127804'
inputContainerStyle={{backgroundColor: "rgba(255,255,255,1.0)"
                , borderRadius: 5.0, borderWidth: 1}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 0}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/42.png')}
style={{width: 21, height: 25}}
/>
</View>
<View style={{flex: 1}}>
<ImageButton
onPress={() => this.props.navigation.navigate('AutoPopulatedMesage1')}
style={{padding: 10}}
imageStyle={{width: 24, height: 23}}
imageSrc={require('../../assets/img/43.png')}/>
</View>
</View>
</View>

</View>
<View style={{marginTop: 17,marginLeft: 18, marginRight: 33}}>
<P style={{fontSize: 17.0, color: "rgba(255,251,251,1.0)", textAlign: 'left'}}>Click on the logos below to access local  Internet resources on the internet & Apps</P>
</View>
<View style={{marginTop: 17,marginLeft: 17, marginRight: 190}}>
<P style={{fontSize: 13.0, color: "rgba(255,246,246,1.0)", textAlign: 'left'}}>Local Networks that work for you</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 0}}>
<ImageButton
onPress={() => this.props.navigation.navigate('Torfaen')}
style={{padding: 10}}
imageStyle={{width: 81, height: 61}}
imageSrc={require('../../assets/img/44.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('CarersTrust')}
style={{padding: 10}}
imageStyle={{width: 124, height: 61}}
imageSrc={require('../../assets/img/45.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('Dewis')}
style={{padding: 10}}
imageStyle={{width: 64, height: 61}}
imageSrc={require('../../assets/img/46.png')}/>
 </View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 9}}>
<ImageButton
onPress={() => this.props.navigation.navigate('ABUB')}
style={{padding: 10}}
imageStyle={{width: 197, height: 61}}
imageSrc={require('../../assets/img/47.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('AgeConnect')}
style={{padding: 10}}
imageStyle={{width: 64, height: 61}}
imageSrc={require('../../assets/img/48.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('FriendofMine')}
style={{padding: 10}}
imageStyle={{width: 48, height: 61}}
imageSrc={require('../../assets/img/49.png')}/>
 </View>
<View style={{marginTop: 7,marginLeft: 18, marginRight: 70}}>
<P style={{fontSize: 13.0, color: "rgba(255,250,250,1.0)", textAlign: 'left'}}>Apps & Digital Services that work for you</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 0}}>
<ImageButton
onPress={() => this.props.navigation.navigate('DementiaSupport1')}
style={{padding: 10}}
imageStyle={{width: 73, height: 61}}
imageSrc={require('../../assets/img/50.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('DementiaSupport2')}
style={{padding: 10}}
imageStyle={{width: 61, height: 61}}
imageSrc={require('../../assets/img/51.png')}/>
<ImageButton
onPress={() => this.props.navigation.navigate('Headspace')}
style={{padding: 10}}
imageStyle={{width: 216, height: 61}}
imageSrc={require('../../assets/img/52.png')}/>
 </View>
            </ScrollView>
        )
    }
}
export default WellbeingNetwork