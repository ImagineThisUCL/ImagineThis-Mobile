import { View, ScrollView, StyleSheet, Image } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import InputField from "../reusables/InputField"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: base.borderRadius
    },
    text: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    }
})

class MessagesSent extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <P style={{flex:5, color: "#000000", fontSize: 21, padding: 10}}>
                            Contacts
                        </P>
                        <Image
                            style={{flex: 1, height: 25}}
                            resizeMode="contain"
                            source={require('../../assets/img/icon-heart.png')}>
                        </Image>
                        <Image
                            style={{flex: 1, height: 25}}
                            resizeMode="contain"
                            source={require('../../assets/img/icon-heart.png')}>
                        </Image>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <InputField
                            placeholder='Boris Johnson'
                            inputContainerStyle={{borderWidth: 1, borderRadius: 5, paddingHorizontal: 5}}
                            containerStyle={{flex:5}}
                        />
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            6
                        </P>
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            3
                        </P>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <InputField
                            placeholder='Loris Thompson'
                            inputContainerStyle={{borderWidth: 1, borderRadius: 5, paddingHorizontal: 5}}
                            containerStyle={{flex:5}}
                        />
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            12
                        </P>
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            2
                        </P>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <InputField
                            placeholder='Noris Bonson'
                            inputContainerStyle={{borderWidth: 1, borderRadius: 5, paddingHorizontal: 5}}
                            containerStyle={{flex:5}}
                        />
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            11
                        </P>
                        <P style={{flex:1, color: "#000000", fontSize: 18, textAlign: 'center'}}>
                            5
                        </P>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default MessagesSent