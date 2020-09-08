import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import Button from '../reusables/Button'
import { StatusBar } from 'expo-status-bar'

class Cards extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 0, backgroundColor: "rgba(27,27,27,1.0)" }}>
                <View style={{ marginTop: 43, marginLeft: 20, marginRight: 21 }}>
                    <P style={{ fontSize: 36.0, fontWeight: '700', color: "rgba(255,255,255,1.0)", textAlign: 'left', flex: 1 }}>Cards</P>
                </View>
                <View style={{ marginTop: 22, marginLeft: 20, marginRight: 20 }}>

                    <View style={{ borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', marginTop: 9, justifyContent: "center" }}>
                            <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(27,27,27,1.0)", textAlign: 'left', flex: 1 }}>Chart Example</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: "center" }}>
                            <P style={{ fontSize: 14.0, fontWeight: '400', color: "rgba(221,172,1,1.0)", textAlign: 'left', flex: 1 }}>Subtitle of card</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 3, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 17, justifyContent: "flex-end" }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Chart')}
                                style={{ backgroundColor: "rgba(221,172,1,1.0)", marginTop: base.margin, minWidth: 116, borderRadius: 100.0 }}
                                textStyle={{ color: "rgba(255,255,255,1.0)", fontSize: 18.0 }}
                            >Chart</Button>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: 22, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', marginTop: 9, justifyContent: "center" }}>
                            <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(27,27,27,1.0)", textAlign: 'left', flex: 1 }}>Card Example</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: "center" }}>
                            <P style={{ fontSize: 14.0, fontWeight: '400', color: "rgba(221,172,1,1.0)", textAlign: 'left', flex: 1 }}>Subtitle of card</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 3, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: 23, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ borderRadius: 10.0, padding: 10, flex: 1, backgroundColor: "rgba(255,255,255,1.0)" }}>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "center" }}>
                            <P style={{ fontSize: 20.0, fontWeight: '700', color: "rgba(27,27,27,1.0)", textAlign: 'left', flex: 1 }}>Card Example</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 0, justifyContent: "center" }}>
                            <Image
                                source={require('../../assets/img/5.png')}
                                style={{ width: 320, height: 178 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: "center" }}>
                            <P style={{ fontSize: 14.0, fontWeight: '400', color: "rgba(221,172,1,1.0)", textAlign: 'left', flex: 1 }}>Subtitle of card</P>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 0, justifyContent: "center" }}>
                            <P style={{ fontSize: 16.0, fontWeight: '400', color: "rgba(13,13,13,1.0)", textAlign: 'left', flex: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}
export default Cards