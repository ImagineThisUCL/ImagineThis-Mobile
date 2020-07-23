import { View, StyleSheet, Text } from "react-native"
import React, { Component } from "react"
import { StatusBar } from 'expo-status-bar'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    }
})

class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.text}>
                    Settings view
                </Text>
            </View>
        )
    }
}
export default Settings