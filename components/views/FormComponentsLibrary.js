// Recreating: Information to populate messages

import { View, ScrollView, TextInput, Text} from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"
import { Input } from 'react-native-elements';

import base from "../../assets/baseStyle"

class FormComponentsLibrary extends Component {

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
                <View style={{flex:1, flexDirection: "row"}}>
                    <View syle={{flex:1}}>
                        <Text style={{color: "#ffffff", fontSize: 21}}>
                        Name:
                        </Text>
                    </View>
                    <View style={{flex:3}}>
                        <Input
                          placeholder='Support Worker'
                          labelStyle={{color: "#ffffff"}}
                          containerStyle={{color: "#ffffff"}}
                          inputStyle={{color: "#ffffff"}}
                          />
                    </View>
                </View>
                <View style={{flex:1, flexDirection: "row"}}>
                    <View syle={{flex:1}}>
                        <Text style={{color: "#ffffff", fontSize: 21}}>
                        Contact:
                        </Text>
                    </View>
                    <View style={{flex:3}}>
                        <Input
                          placeholder='Support Worker'
                          labelStyle={{color: "#ffffff"}}
                          containerStyle={{color: "#ffffff"}}
                          inputStyle={{color: "#ffffff"}}
                          />
                    </View>
                </View>

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
export default FormComponentsLibrary
