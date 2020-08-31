import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
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
<P style={{fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Well-being Diary </P>
<ImageButton
onPress={() => this.props.navigation.navigate('Reachout')}
style={{padding: 10}}
imageStyle={{width: 24, height: 31}}
imageSrc={require('../../assets/img/81.png')}/>
 </View>
<View style={{marginTop: 25,marginLeft: 16, marginRight: 14}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={384}
height={229}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
<View style={{marginTop: 9,marginLeft: 150, marginRight: 148}}>
<Button
onPress={() => this.props.navigation.navigate('CallsmadevWellbeing')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 22.0}}
>View</Button>
</View>
<View style={{marginTop: 8,marginLeft: 16, marginRight: 14}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={384}
height={241}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
<View style={{marginTop: 9,marginLeft: 150, marginRight: 148}}>
<Button
onPress={() => this.props.navigation.navigate('OutdoorstepsvWellbeing')}
   style={{backgroundColor:"rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0}}
   textStyle={{color: "rgba(20,126,251,1.0)", fontSize: 22.0}}
>View</Button>
</View>
            </ScrollView>
        )
    }
}
export default ReportforSharing