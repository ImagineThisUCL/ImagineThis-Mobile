import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"
import AlertBox from "../reusables/AlertBox"

import base from "../../assets/baseStyle"

export default class Nudge extends Component {
    render() {
        return (
            <ScrollView style={{paddingHorizontal:15, paddingVertical: 120, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                   Personal nudge
                </P>
                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10}}>
                   <AlertBox>
                      Let your care network know how you are!
                   </AlertBox>
                </View>
            </ScrollView>
        )
    }
}
