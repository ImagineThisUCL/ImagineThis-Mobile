import { View, ScrollView, Image, TouchableOpacity } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Dropdown from "../reusables/Dropdown"
import Button from "../reusables/Button"

import base from "../../assets/baseStyle"

export default class ActivitySupportMessage extends Component {
    render() {
        return (
            <ScrollView style={{padding:10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                   Activity Support Message
                </P>
                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10}}>
                    <P style={{color: "#000000", fontSize: 21}}>
                        You appear to be actively interested in 
                    </P>
                    <Dropdown
                        selectedValue="Option1"
                        items={[
                            {label: 'Lorem ipsum', value: 'Option1'},
                            {label: 'Dolor sit', value: 'Option2'},
                            {label: 'Amet', value: 'Option3'},
                        ]}
                        style={{fontSize: 21, color: "#555555"}}/>
                    <P style={{color: "#000000", fontSize: 21}}>
                        Are you interested to join that activities online group to learn what is happening locally
                    </P>
                    <Dropdown
                        selectedValue="Option2"
                        items={[
                            {label: 'Lorem ipsum', value: 'Option1'},
                            {label: 'Dolor sit', value: 'Option2'},
                            {label: 'Amet', value: 'Option3'},
                        ]}
                        style={{fontSize: 21, color: "#555555"}}/>
                    <P style={{color: "#000000", fontSize: 21}}>
                        Click send if you want carer support workers to help you do this or click cancel if you do not  
                    </P>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Button
                        style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#147EFB", fontWeight: "bold"}}>
                        Cancel
                    </Button>
                    <Button
                        style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#147EFB", fontWeight: "bold"}}>
                        Send
                    </Button>
                </View>
            </ScrollView>
        )
    }
}
