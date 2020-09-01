import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'
import ImageButton from "../reusables/ImageButton"

class Register extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)" }}>
                <View style={{ marginTop: 43, marginLeft: 26, marginRight: 34 }}>
                    <InputField
                        label='Name'
                        labelStyle={{ color: "rgba(255,255,255,1.0)", marginBottom: 5 }}
                        placeholder='Franta Flinta'
                        inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderRadius: 20.0,
                            paddingHorizontal: 10,
                            backgroundColor: "rgba(255,255,255,1.0)",
                        }}
                    />
                </View>
                <View style={{ marginTop: 13, marginLeft: 26, marginRight: 34 }}>
                    <InputField
                        label='Email'
                        labelStyle={{ color: "rgba(255,255,255,1.0)", marginBottom: 5 }}
                        placeholder='test@figma.com'
                        inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderRadius: 20.0,
                            paddingHorizontal: 10,
                            backgroundColor: "rgba(255,255,255,1.0)",
                        }}
                    />
                </View>
                <View style={{ marginTop: 38, marginLeft: 26, marginRight: 34 }}>
                    <InputField
                        label='Password'
                        labelStyle={{ color: "rgba(255,255,255,1.0)", marginBottom: 5 }}
                        placeholder='********'
                        inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderRadius: 20.0,
                            paddingHorizontal: 10,
                            backgroundColor: "rgba(255,255,255,1.0)",
                        }}
                    />
                </View>
                <View style={{ marginTop: 7, marginLeft: 26, marginRight: 34 }}>
                    <InputField
                        label='Repeat'
                        labelStyle={{ color: "rgba(255,255,255,1.0)", marginBottom: 5 }}
                        placeholder='********'
                        inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderRadius: 20.0,
                            paddingHorizontal: 10,
                            backgroundColor: "rgba(255,255,255,1.0)",
                        }}
                    />
                </View>
                <View style={{ marginTop: 23, marginLeft: 27, marginRight: 34 }}>
                    <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>Profile pic</P>
                </View>
                <View style={{ marginTop: 19, marginLeft: 151, marginRight: 158 }}>
                    <ImageButton
                        style={{ padding: 10 }}
                        imageStyle={{ width: 51, height: 51 }}
                        imageSrc={require('../../assets/img/1.png')} />
                </View>
                <View style={{ marginTop: 38, marginLeft: 57, marginRight: 58 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('NavigationBar', { screen: 'Browse' })}
                        style={{ backgroundColor: "rgba(255,255,255,1.0)", marginTop: base.margin, minWidth: 245, borderRadius: 100.0 }}
                        textStyle={{ color: "rgba(109,190,41,1.0)", fontSize: 22.0 }}
                    >Create account</Button>
                </View>
            </ScrollView>
        )
    }
}
export default Register