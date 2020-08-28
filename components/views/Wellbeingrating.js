import { View, ScrollView } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'

class Wellbeingrating extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 0, backgroundColor: "rgba(16,40,123,1.0)" }}>
                <View style={{ marginTop: 13, marginLeft: 17, marginRight: 18 }}>
                    <P style={{ fontSize: 24.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Torfaen resources{"\n"}v wellbeing rating</P>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                    <P style={{ fontSize: 26.0, fontWeight: '700', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Resource</P>
                    <P style={{ fontSize: 26.0, fontWeight: '700', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>Rating{"\n"}</P>
                </View>
                <View style={{ marginTop: 12, marginLeft: 10, marginRight: 9 }}>
                    <View style={{ borderRadius: 10.0, padding: 10, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 14 }}>
                            <View style={{ flex: 5 }}>
                                <InputField
                                    placeholder='Coffee at the hub'
                                    inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                                    inputContainerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 5.0,
                                        paddingHorizontal: 10,
                                        backgroundColor: "rgba(255,255,255,1.0)",
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <P style={{ fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>5</P>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 3 }}>
                            <View style={{ flex: 5 }}>
                                <InputField
                                    placeholder='The museum cafe'
                                    inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                                    inputContainerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 5.0,
                                        paddingHorizontal: 10,
                                        backgroundColor: "rgba(255,255,255,1.0)",
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <P style={{ fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>2</P>
                            </View>
                            <View style={{ flex: 1 }}>
                                <P style={{ fontSize: 18.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>3</P>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 0, justifyContent: "center" }}>
                            <InputField
                                placeholder='WhatsApp Groups'
                                inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderRadius: 5.0,
                                    paddingHorizontal: 10,
                                    backgroundColor: "rgba(255,255,255,1.0)",
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 246, justifyContent: "center" }}>
                            <P style={{ fontSize: 24.0, fontWeight: '400', color: "rgba(0,0,0,1.0)", textAlign: 'left', flex: 1 }}>On the scale (0=lowest score, {"\n"}10=highest score).</P>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}
export default Wellbeingrating