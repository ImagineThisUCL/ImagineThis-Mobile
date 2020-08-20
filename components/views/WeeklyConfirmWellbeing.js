import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import CustomSlider from "../reusables/CustomSlider"

class WeeklyConfirmWellbeing extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 23}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Over the past 7 days, rate how well you have have felt. </P>
</View>
<View style={{marginTop: 9}}>
<View style={{padding: 10, backgroundColor: "rgba(255,255,255,1.0)", borderRadius: 10.0}}>
                    <CustomSlider
                        minimumTrackTintColor="#A4C8FF"
                        maximumTrackTintColor="#1A9AA9"
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={8}
                        thumbTintColor="#3A334F"
                        labelStyle={{color: "#C4C4C4", fontWeight: "bold", fontSize: 21}}
                        valueLabelStyle={{color: "#1A9AA9", fontWeight: "bold", fontSize: 21}}/>
                </View>

</View>
<View style={{marginTop: 9}}>
<View style={{borderRadius: 10.0 , marginLeft: 11, marginRight: 11, padding: 0, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 11, justifyContent: "center"}}>
<P style={{fontSize: 24.0, color: "rgba(0,0,0,1.0)", textAlign: 'left'}}>As needed move the Black Button up or down the scale to log how you well you feel.{"\n"}{"\n"}On the scale  (0=lowest score, {"\n"}10=highest score).{"\n"}{"\n"}Then click SAVE. This will create a diary entry in your App{"\n"}</P>
</View>
</View>

</View>
<View style={{flexDirection: "row", justifyContent: "flex-end", marginTop: 24}}>
<Button
onPress={() => this.props.navigation.navigate('ReportforSharing')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, width: 150, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 26.0}}
>SAVE</Button>
</View>
            </ScrollView>
        )
    }
}
export default WeeklyConfirmWellbeing