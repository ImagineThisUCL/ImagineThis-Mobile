// Recreating: Care Network Page

import { View, ScrollView, useState, Image} from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"
import IconButton from "../reusables/IconButton"
import { Card } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Toggle from "../reusables/Toggle"

import base from "../../assets/baseStyle"

class Tracking extends Component {

    render() {

        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 24}}>
                    Initially, please set up your data sharing preferences with a carer support worker
                </P>
                <Card containerStyle={{borderRadius: 7, margin: 0, padding: 10, marginBottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <IconButton
                            icon={
                                <Feather name="phone-call" size={24} color="black" />
                            }
                        />
                    </View>
                    <View style={{flexDirection: 'row', padding: 0}}>
                        <P style={{fontSize: 18, textAlign: 'center'}}>
                            When you click the above button the App will enable you to keep a weekly record of your well-being and allow you to understand the importance of social contact & movement in your life
                        </P>
                    </View>
                </Card>

                <Card
                    containerStyle={{borderRadius: 15, borderWidth: 3, borderColor: '#B5B4BA', margin: 0, padding: 10, backgroundColor: 'transparent'}}>
                    <View style={{flexDirection: 'row'}}>
                        <P style={{fontSize: 18, textAlign: 'center', flex: 2, color: 'white'}}>
                             Click the OK button below to consent to the creation of a map that enables you and other app users to understand what support activties help people in your area.  By consenting you will not be sharing personally identifiable data.  All data used to create the map will be annonymised to protect your privacy.
                        </P>
                        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                            <Image
                                style={{width: 114, height: 169}}
                                source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <P style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
                                    OK?
                                </P>
                                <Toggle
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor="white"
                                        ios_backgroundColor="#3e3e3e"
                                    //    onValueChange={toggleSwitch}
                                    //    value={isEnabled}
                                />
                            </View>
                        </View>
                    </View>
                </Card>

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
export default Tracking
