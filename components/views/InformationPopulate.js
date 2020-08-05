// Recreating: Information to populate messages

import { View, ScrollView, Text, TextInput} from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"
import IconButton from "../reusables/IconButton"
import InputField from "../reusables/InputField"
import { Card } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

import base from "../../assets/baseStyle"

class InformationPopulate extends Component {

    render() {

        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    Set up your primary care network  text messaging template on the next three screens.
                    {"\n\n"}
                    Do this initially with your carer support worker.  Once saved you can change these at any time
                    {"\n\n"}
                    Who do like to talk to?
                </P>
                <Card containerStyle={{borderRadius: 7, margin: 0, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <InputField
                            label='Name'
                            placeholder='e.g. Thomas'
                            inputContainerStyle={{borderWidth: 1, borderRadius: 5, paddingHorizontal: 5}}
                            containerStyle={{flex:9}}
                        />
                        <IconButton
                            icon={
                                <Feather name="phone-call" size={24} color="black" />                            }
                        />
                    </View>
                    <View style={{flexDirection: 'row', padding: 0}}>
                        <InputField
                            label='Contact Number'
                            placeholder='e.g. 123456'
                            inputContainerStyle={{borderWidth: 1, borderRadius: 5 , paddingHorizontal: 5}}
                            containerStyle={{flex:9}}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <IconButton
                            icon={
                                <Feather name="plus-circle" size={24} color="black" />                            }
                        />
                    </View>
                </Card>

                <P style={{color: "#ffffff", fontSize: 21}}>
                    {"\n\n"}
                    The name you use for texts:
                </P>

                <View style={{flexDirection: 'row'}}>
                    <InputField
                        label='Name'
                        placeholder='e.g. Thomas'
                        inputContainerStyle={{borderWidth: 1, borderRadius: 5, backgroundColor: "#ffffff", paddingHorizontal: 5}}
                        labelStyle={{color: "#ffffff", fontSize: 21}}
                    />
                </View>

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
export default InformationPopulate
