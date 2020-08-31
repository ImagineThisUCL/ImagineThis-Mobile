import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'

class Browse extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)"}}>
<View style={{marginTop: 23,marginLeft: 23, marginRight: 38}}>
<P style={{fontSize: 23.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Browse jobs around you</P>
</View>
<View style={{marginTop: 20,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Mow 5 acres of my lawn</P>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<P style={{fontSize: 14.0, fontWeight: '400', color: "rgba(109,190,41,1.0)", textAlign: 'left', flex: 1 }}>Posted 2 days ago in gardening</P>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower that you have available. Please sharpen all of its blades before coming.</P>
</View>
<View style={{flexDirection: 'row', marginTop: 19}}>
<Button
onPress={() => this.props.navigation.navigate('Detail')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Detail</Button>
</View>
</View>

</View>
<View style={{marginTop: 14,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Mow 5 acres of my lawn</P>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<P style={{fontSize: 14.0, fontWeight: '400', color: "rgba(109,190,41,1.0)", textAlign: 'left', flex: 1 }}>Posted 2 days ago in gardening</P>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower that you have available. Please sharpen all of its blades before coming.</P>
</View>
<View style={{flexDirection: 'row', marginTop: 19, justifyContent: "center"}}>
<Button
onPress={() => this.props.navigation.navigate('Detail')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Detail</Button>
</View>
</View>

</View>
<View style={{marginTop: 14,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Mow 5 acres of my lawn</P>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<P style={{fontSize: 14.0, fontWeight: '400', color: "rgba(109,190,41,1.0)", textAlign: 'left', flex: 1 }}>Posted 2 days ago in gardening</P>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower that you have available. Please sharpen all of its blades before coming.</P>
</View>
<View style={{flexDirection: 'row', marginTop: 19, justifyContent: "flex-end"}}>
<Button
onPress={() => this.props.navigation.navigate('Detail')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Detail</Button>
</View>
</View>

</View>
<View style={{marginTop: 14,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "center"}}>
<P style={{fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'left', flex: 1 }}>Mow 5 acres of my lawn</P>
</View>
<View style={{flexDirection: 'row', marginTop: 6, justifyContent: "center"}}>
<P style={{fontSize: 14.0, fontWeight: '400', color: "rgba(109,190,41,1.0)", textAlign: 'left', flex: 1 }}>Posted 2 days ago in gardening</P>
</View>
<View style={{flexDirection: 'row', marginTop: 3, justifyContent: "center"}}>
<P style={{fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>My lawn is very precious. Make sure to bring the best lawn mower.</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 6}}>
<View style={{flex: 3}}>
<Button
onPress={() => this.props.navigation.navigate('Map')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Map</Button>
</View>
<View style={{flex: 3}}>
<Button
onPress={() => this.props.navigation.navigate('Detail')}
   style={{backgroundColor:"rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Detail</Button>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Browse