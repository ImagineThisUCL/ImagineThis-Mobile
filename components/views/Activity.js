import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import {
  LineChart,
  BarChart,
  PieChart
} from "react-native-chart-kit"

class Activity extends Component {render() {
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
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)"}}>
<View style={{marginTop: 42,marginLeft: 20, marginRight: 20}}>
<P style={{fontSize: 22.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Your activity over the past 6 months</P>
</View>
<View style={{marginTop: 12,marginLeft: 20, marginRight: 20}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={320}
height={246}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Activity