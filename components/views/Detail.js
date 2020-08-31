import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'
import ImageButton from "../reusables/ImageButton"

class Detail extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)"}}>
<View style={{marginTop: 28,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Mow 5 acres of my lawn</P>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<P style={{fontSize: 14.0, fontWeight: '400', color: "rgba(109,190,41,1.0)", textAlign: 'left', flex: 1 }}>Posted 2 days ago in gardening</P>
</View>
<View style={{flexDirection: 'row', marginTop: 5, justifyContent: "center"}}>
<Image
source={require('../../assets/img/18.png')}
style={{width: 301, height: 0}}
/>
</View>
<View style={{flexDirection: 'row', marginTop: 8, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower that you have available. Please sharpen all of its blades before coming.</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 19}}>
<View style={{flex: 2}}>
<ImageButton
onPress={() => this.props.navigation.navigate('ZoomedImage')}
style={{padding: 10}}
imageStyle={{width: 92, height: 92}}
imageSrc={require('../../assets/img/19.png')}/>
</View>
<View style={{flex: 2}}>
<ImageButton
onPress={() => this.props.navigation.navigate('ZoomedImage')}
style={{padding: 10}}
imageStyle={{width: 92, height: 92}}
imageSrc={require('../../assets/img/20.png')}/>
</View>
<View style={{flex: 2}}>
<ImageButton
onPress={() => this.props.navigation.navigate('ZoomedImage')}
style={{padding: 10}}
imageStyle={{width: 92, height: 92}}
imageSrc={require('../../assets/img/21.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 22, justifyContent: "center"}}>
<Button
onPress={() => this.props.navigation.navigate('Offer')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 182, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Make an offer</Button>
</View>
</View>

</View>
<View style={{marginTop: 18,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '700', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Ask the task poster</P>
</View>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<Image
source={require('../../assets/img/22.png')}
style={{width: 301, height: 0}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 18}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/23.png')}
style={{width: 56, height: 56}}
/>
</View>
<View style={{flex: 7}}>
<View style={{borderRadius: 9.0, padding: 10, flex: 1, backgroundColor: "rgba(235,243,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 7, justifyContent: "center"}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower that you have available.</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 3}}>
<View style={{flex: 4}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(145,145,145,1.0)", textAlign: 'left', flex: 1 }}>Jacob Everdoing</P>
</View>
<View style={{flex: 3}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(145,145,145,1.0)", textAlign: 'right', flex: 1 }}>2 days ago</P>
</View>
</View>
</View>

</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 18}}>
<View style={{flex: 7}}>
<View style={{borderRadius: 9.0, padding: 10, flex: 1, backgroundColor: "rgba(235,255,241,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 7, justifyContent: "center"}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Sure thing. I’ll do everything as you asked.</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 5}}>
<View style={{flex: 5}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(145,145,145,1.0)", textAlign: 'left', flex: 1 }}>Karl Franz Scyther</P>
</View>
<View style={{flex: 3}}>
<P style={{fontSize: 13.0, fontWeight: '400', color: "rgba(145,145,145,1.0)", textAlign: 'right', flex: 1 }}>2 days ago</P>
</View>
</View>
</View>

</View>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/24.png')}
style={{width: 56, height: 56}}
/>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 18, justifyContent: "center"}}>
<InputField
     placeholder='Ask your question'
     inputStyle={{color: "rgba(113,113,113,1.0)"}}
     inputContainerStyle={{
           borderWidth: 1,
           borderRadius: 20.0,
           paddingHorizontal: 10,
           backgroundColor: "rgba(255,255,255,1.0)",}}
/>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Detail