import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import ImageButton from "../reusables/ImageButton"

class HomePageWeekly extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 24}}>
<P style={{fontSize: 27.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Welcome</P>
</View>
<View style={{marginTop: 47}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 1, justifyContent: "center"}}>
<P style={{fontSize: 22.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Well-being Score: Last Week</P>
</View>
</View>

</View>
<View style={{marginTop: 11}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9, justifyContent: "flex-end"}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 31, height: 37}}
imageSrc={require('../../assets/img/25.png')}/>
</View>
</View>

</View>
<View style={{marginTop: 23}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 0, justifyContent: "center"}}>
<P style={{fontSize: 22.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Activity since last Sunday </P>
</View>
</View>

</View>
<View style={{marginTop: 1}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 14}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/26.png')}
style={{width: 32, height: 46}}
/>
</View>
<View style={{flex: 2}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Steps</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>745</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 26}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/27.png')}
style={{width: 39, height: 40}}
/>
</View>
<View style={{flex: 2}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Calls</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>4</P>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 27}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/28.png')}
style={{width: 43, height: 40}}
/>
</View>
<View style={{flex: 3}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>Text Message</P>
</View>
<View style={{flex: 1}}>
<P style={{fontSize: 20.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>12</P>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default HomePageWeekly