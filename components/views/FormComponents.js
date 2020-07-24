// Recreating: Information to populate messages

import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"

import base from "../../assets/baseStyle"

class FormComponents extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    Set up your primary care network  text messaging template on the next three screens.
                    {"\n\n"}
                    Do this initially with your carer support worker.  Once saved you can change these at any time
                    {"\n\n"}
                    {"\n\n"}
                    Who do like to talk to?
                </P>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    The name you use for texts:
                </P>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Button
                        style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#147EFB", fontWeight: "bold"}}>
                        No Thanks
                    </Button>
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
export default FormComponents
