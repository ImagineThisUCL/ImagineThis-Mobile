import { View, ScrollView, Image, TouchableOpacity } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import ImageButton from "../reusables/ImageButton"

import base from "../../assets/baseStyle"

export default class Nudge extends Component {
    render() {
        return (
            <ScrollView style={{paddingHorizontal:15, paddingVertical: 120, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                   Personal nudge
                </P>
                <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10}}>
                    <P style={{color: "#000000", fontSize: 21, textAlign: "center"}}>
                        Let your care network know how you are!
                    </P>
                    <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, flexDirection: "row", justifyContent: "space-around"}}>
                        <ImageButton
                            onPress={() => console.log("Replace this onPress with actual function")}
                            style={{padding: 10}}
                            imageStyle={{width: 50, height: 50}}
                            imageSrc={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png'}}/>
                        <ImageButton
                            onPress={() => console.log("Replace this onPress with actual function")}
                            style={{padding: 10}}
                            imageStyle={{width: 50, height: 50}}
                            imageSrc={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/No_icon_red.svg/1024px-No_icon_red.svg.png'}}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
