import { View, ScrollView, Image } from "react-native"
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
<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 19}}>
<Image
source={require('../../assets/img/6.png')}
style={{width: 51, height: 51}}
/>
<Image
source={require('../../assets/img/7.png')}
style={{width: 67, height: 67}}
/>
<Image
source={require('../../assets/img/8.png')}
style={{width: 65, height: 65}}
/>
 </View>
<View style={{marginTop: 19,marginLeft: 30, marginRight: 34}}>
<Image
source={require('../../assets/img/9.png')}
style={{width: 296, height: 1}}
/>
</View>
<View style={{marginTop: 12,marginLeft: 20, marginRight: 20}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 10}}>
<View style={{flex: 4}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(239,239,239,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9}}>
<Image
source={require('../../assets/img/10.png')}
style={{width: 67, height: 67}}
/>
</View>
</View>

</View>
<View style={{flex: 4}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(239,239,239,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 17, justifyContent: "flex-end"}}>
<Image
source={require('../../assets/img/11.png')}
style={{width: 51, height: 51}}
/>
</View>
</View>

</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 4}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(239,239,239,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 9}}>
<Image
source={require('../../assets/img/12.png')}
style={{width: 67, height: 67}}
/>
</View>
</View>

</View>
<View style={{flex: 4}}>
<View style={{borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(239,239,239,1.0)"}}>
<View style={{flexDirection: 'row', marginTop: 17, justifyContent: "flex-end"}}>
<Image
source={require('../../assets/img/13.png')}
style={{width: 51, height: 51}}
/>
</View>
</View>

</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default Activity