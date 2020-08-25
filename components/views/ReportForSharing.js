import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import ImageButton from "../reusables/ImageButton"
import {
  LineChart,
  BarChart,
  PieChart
} from "react-native-chart-kit"

class ReportforSharing extends Component {render() {
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
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 27}}>
<P style={{fontSize: 24.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Well-being Diary </P>
<ImageButton
onPress={() => this.props.navigation.navigate('Reachout')}
style={{padding: 10}}
imageStyle={{width: 24, height: 31}}
imageSrc={require('../../assets/img/31.png')}/>
 </View>
<View style={{marginTop: 57,marginLeft: 31, marginRight: 20}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={363}
height={229}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
<View style={{marginTop: 13,marginLeft: 31, marginRight: 24}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={359}
height={272}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
            </ScrollView>
        )
    }
}
export default ReportforSharing