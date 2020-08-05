import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"
import CustomSlider from "../reusables/CustomSlider"

import base from "../../assets/baseStyle"

export default class WeeklyConfirmWellbeing extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    Over the past 7 days, rate how well you have felt.
                </P>
                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, flexDirection: "row"}}>
                    <CustomSlider
                        minimumValue={0}
                        minimumTrackTintColor="#A4C8FF"
                        maximumTrackTintColor="#1A9AA9"
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={5}
                        thumbTintColor="#3A334F"
                        labelStyle={{color: "#C4C4C4", fontWeight: "bold", fontSize: 21}}
                        valueLabelStyle={{color: "#1A9AA9", fontWeight: "bold", fontSize: 21}}/>
                </View>
                <View style={{padding: 20, backgroundColor: "#ffffff", borderRadius: 10, marginTop: 20}}>
                    <P style={{color: "#000000", fontSize: 21}}>
                        As needed move the Black Button up or down the scale to log how you well you feel.{"\n\n"}
                        On the scale (0=lowest score, 10=highest score).{"\n\n"}
                        Then click SAVE. This will create a diary entry in your App
                    </P>
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                    <Button
                        style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#147EFB", fontWeight: "bold"}}>
                        Save
                    </Button>
                </View>
            </ScrollView>
        )
    }
}
