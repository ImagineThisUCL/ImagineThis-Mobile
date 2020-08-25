import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import {
  LineChart,
  BarChart,
  PieChart
} from "react-native-chart-kit"

class OutdoorstepsvWellbeing extends Component {render() {
const LINE_CHART_DATA = {
            labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
            datasets: [
                {
                data: [4, 6, 5, 9, 1, 5],
                color: (opacity = 1) => `rgba(26, 154, 169, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ]
        }

        const LINE_CHART_CONFIG = {
            backgroundGradientFrom: "#ffffff",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: true // optional
        }
        return (
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)"}}>
<View style={{marginTop: 12,marginLeft: 11, marginRight: 64}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Well-being v Steps</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 14}}>
<Button
onPress={() => this.props.navigation.navigate('CallsmadevWellbeing')}
   style={{backgroundColor:"rgba(196,196,196,1.0)", marginTop: base.margin, width: 154, borderRadius: 5.0}}
   textStyle={{color: "rgba(0,0,0,1.0)", fontSize: 17.0}}
>Well-being v Contact</Button>
<Button
   style={{backgroundColor:"rgba(26,154,169,1.0)", marginTop: base.margin, width: 167, borderRadius: 5.0}}
   textStyle={{color: "rgba(0,0,0,1.0)", fontSize: 17.0}}
>Well-Being v Steps</Button>
 </View>
<View style={{marginTop: 3,marginLeft: 70, marginRight: 56}}>
<P style={{fontSize: 13.0, color: "rgba(0,0,0,1.0)", textAlign: 'center'}}>Calls made and Well-being</P>
</View>
<View style={{marginTop: 0,marginLeft: 11, marginRight: 11}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={392}
height={458}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
            </ScrollView>
        )
    }
}
export default OutdoorstepsvWellbeing