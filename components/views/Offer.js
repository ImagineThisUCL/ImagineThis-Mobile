import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'
import InputField from '../reusables/InputField'
import CustomSlider from "../reusables/CustomSlider"
import Dropdown from "../reusables/Dropdown"

class Offer extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 0, backgroundColor: "rgba(109,190,41,1.0)" }}>
                <View style={{ marginTop: 28, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', marginTop: 11, justifyContent: "center" }}>
                            <P style={{ fontSize: 17.0, fontWeight: '700', color: "rgba(50,93,122,1.0)", textAlign: 'center', flex: 1 }}>Your offer for task:</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 1, justifyContent: "center" }}>
                            <P style={{ fontSize: 20.0, fontWeight: '400', color: "rgba(50,93,122,1.0)", textAlign: 'center', flex: 1 }}>Mow 5 acres of my lawn</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: "center" }}>
                            <Image
                                source={require('../../assets/img/2.png')}
                                style={{ width: 301, height: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '700', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Choose amount:</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "center" }}>
                            <CustomSlider
                                minimumTrackTintColor="#A4C8FF"
                                maximumTrackTintColor="#1A9AA9"
                                minimumValue={20}
                                maximumValue={200}
                                step={1}
                                value={120}
                                thumbTintColor="#3A334F"
                                labelStyle={{ color: "#C4C4C4", fontWeight: "bold", fontSize: 21 }}
                                valueLabelStyle={{ color: "#1A9AA9", fontWeight: "bold", fontSize: 21 }} />

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center" }}>
                            <Image
                                source={require('../../assets/img/3.png')}
                                style={{ width: 301, height: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '700', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Choose date:</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 9, justifyContent: "center" }}>
                            <Dropdown
                                items={[
                                    { key: 'option1', label: 'Monday 21/6' },
                                    { key: 'option2', label: 'Placeholder' },
                                ]}
                                containerStyle={{ borderRadius: 50.0, backgroundColor: "rgba(255,255,255,1.0)" }}
                                textStyle={{ fontSize: 17.0, color: "rgba(0,0,0,1.0)" }} />

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 36, justifyContent: "center" }}>
                            <Image
                                source={require('../../assets/img/4.png')}
                                style={{ width: 301, height: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 14, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '700', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Write message (optional):</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: "center" }}>
                            <InputField
                                placeholder='Your message'
                                inputStyle={{ color: "rgba(113,113,113,1.0)" }}
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderRadius: 20.0,
                                    paddingHorizontal: 10,
                                    backgroundColor: "rgba(255,255,255,1.0)",
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "center" }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('NavigationBar', { screen: 'Browse' })}
                                style={{ backgroundColor: "rgba(36,82,113,1.0)", marginTop: base.margin, minWidth: 152, borderRadius: 100.0 }}
                                textStyle={{ color: "rgba(255,255,255,1.0)", fontSize: 18.0 }}
                            >Send offer</Button>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: 33, marginLeft: 20, marginRight: 20 }}>
                    <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'center', flex: 1 }}>Estimated time needed (hours):</P>
                </View>
                <View style={{ marginTop: 13, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', marginTop: 13, justifyContent: "center" }}>
                            <CustomSlider
                                minimumTrackTintColor="#A4C8FF"
                                maximumTrackTintColor="#1A9AA9"
                                minimumValue={1}
                                maximumValue={10}
                                step={1}
                                value={5}
                                thumbTintColor="#3A334F"
                                labelStyle={{ color: "#C4C4C4", fontWeight: "bold", fontSize: 21 }}
                                valueLabelStyle={{ color: "#1A9AA9", fontWeight: "bold", fontSize: 21 }} />

                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}
export default Offer