import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit"

import base from "../../assets/baseStyle"

export default class ReportForSharing extends Component {
    render() {
        const LINE_CHART_DATA = {
            labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
            datasets: [
                {
                data: [4, 6, 5, 9, 1, 5],
                color: (opacity = 1) => `rgba(26, 154, 169, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ],
            legend: ["Well-being score"] // optional
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

        const BAR_CHART_DATA = {
            labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
            datasets: [
                {
                data: [4, 6, 5, 9, 1, 5]
                }
            ]
        }

        const BAR_CHART_CONFIG = {
            backgroundGradientFrom: "#ffffff",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(26, 154, 169, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        }

        const PROGRESS_CHART_DATA = {
            labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May"],
            data: [0.1, 0.3, 0.5, 0.7, 0.9]
        }

        const PROGRESS_CHART_CONFIG = {
            backgroundGradientFrom: "#ffffff",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(26, 154, 169, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        }

        const CHART_WIDTH = base.window.width - base.padding*4

        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    Well-being Diary
                </P>

                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
                    <P style={{color: "#000000", fontSize: 19}}>
                        Well-being Score
                    </P>
                    <LineChart
                        data={LINE_CHART_DATA}
                        width={CHART_WIDTH}
                        height={256}
                        chartConfig={LINE_CHART_CONFIG}
                        bezier/>
                </View>

                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
                    <P style={{color: "#000000", fontSize: 19}}>
                        Well-being Score
                    </P>
                    <LineChart
                        data={LINE_CHART_DATA}
                        width={CHART_WIDTH}
                        height={256}
                        chartConfig={LINE_CHART_CONFIG}
                        fromZero/>
                </View>

                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
                    <P style={{color: "#000000", fontSize: 19}}>
                        Well-being Score
                    </P>
                    <BarChart
                        data={BAR_CHART_DATA}
                        width={CHART_WIDTH}
                        height={220}
                        chartConfig={BAR_CHART_CONFIG}/>
                </View>

                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10}}>
                    <P style={{color: "#000000", fontSize: 19}}>
                        Well-being Score
                    </P>
                    <ProgressChart
                        data={PROGRESS_CHART_DATA}
                        width={CHART_WIDTH}
                        height={220}
                        chartConfig={PROGRESS_CHART_CONFIG}/>
                </View>

            </ScrollView>
        )
    }
}
