import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import CustomSlider from "../reusables/CustomSlider"
import ImageButton from "../reusables/ImageButton"
import {
  LineChart,
  BarChart,
  PieChart
} from "react-native-chart-kit"

class Chart extends Component {render() {
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
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: "rgba(27,27,27,1.0)"}}>
<View style={{marginTop: 45,marginLeft: 20, marginRight: 66}}>
<P style={{fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Chart Example</P>
</View>
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 31}}>
<P style={{fontSize: 18.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>AAPL</P>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 26, height: 26}}
imageSrc={require('../../assets/img/4.png')}/>
 </View>
<View style={{marginTop: 0,marginLeft: 20, marginRight: 248}}>
<P style={{fontSize: 18.0, fontWeight: '700', color: "rgba(148,148,148,1.0)", textAlign: 'left', flex: 1 }}>Technology</P>
</View>
<View style={{marginTop: 0,marginLeft: 20, marginRight: 144}}>
<P style={{fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>130.93 USD</P>
</View>
<View style={{marginTop: 0,marginLeft: 20, marginRight: 191}}>
<P style={{fontSize: 18.0, fontWeight: '700', color: "rgba(148,148,148,1.0)", textAlign: 'left', flex: 1 }}>1 September 2020</P>
</View>
<View style={{marginTop: 13,marginLeft: 20, marginRight: 20}}>
<View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
<LineChart
data={LINE_CHART_DATA}
width={320}
height={246}
chartConfig={LINE_CHART_CONFIG}
bezier/>
</View>

</View>
<View style={{marginTop: 22,marginLeft: 20, marginRight: 219}}>
<P style={{fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>Shares to buy</P>
</View>
<View style={{marginTop: 12,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(60,60,60,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 16, justifyContent: "center"}}>
                    <CustomSlider
                        minimumTrackTintColor="#A4C8FF"
                        maximumTrackTintColor="#1A9AA9"
                        minimumValue={1}
                        maximumValue={10}
                        step={1}
                        value={8}
                        thumbTintColor="#3A334F"
                        labelStyle={{color: "#C4C4C4", fontWeight: "bold", fontSize: 21}}
                        valueLabelStyle={{color: "#1A9AA9", fontWeight: "bold", fontSize: 21}}/>

</View>
</View>

</View>
<View style={{marginTop: 32,marginLeft: 104, marginRight: 104}}>
<Button
onPress={() => this.props.navigation.navigate('NavigationBar', {screen:'Cards'})}
   style={{backgroundColor:"rgba(221,172,1,1.0)", marginTop: base.margin, minWidth: 152, borderRadius: 100.0}}
   textStyle={{color: "rgba(255,255,255,1.0)", fontSize: 18.0}}
>Invest</Button>
</View>
            </ScrollView>
        )
    }
}
export default Chart